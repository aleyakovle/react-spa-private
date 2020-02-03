import { ActionMeta } from 'redux-actions';
import { takeEvery, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { get } from 'lodash';
import { IRequestCallParams } from 'utils/rest-request';
import { IStarshipsFailResponse } from 'dtos/common';
import { IGetStarshipsSuccessResponse } from 'dtos/starships';

export type ISagaWrapper = (action: ActionMeta<any, any>) => any;

const decoratorsDefault: ISagaDecorator[] = [];

export type ISagaDecorator = (target: (action: ActionMeta<any, any>) => any) => ISagaWrapper;

export const processSagas = (
    sagas: { [index: string]: ISagaWrapper },
    decorators = decoratorsDefault,
    effect = takeEvery,
) =>
    Object.keys(sagas).map((actionName: string) =>
        effect(
            actionName,
            decorators.reduce((saga, decorator) => decorator(saga), sagas[actionName]),
        ),
    );

export const buildResponseActionMeta = (action: ActionMeta<any, any>, options: IRequestCallParams) => {
    return {
        ...action.meta,
        options,
        originalAction: action,
    };
};

export const apiRequestSaga = (options: IRequestCallParams): ISagaWrapper =>
    function*(action: ActionMeta<any, any>) {
        const { success: actionSuccess, failure: actionFailure } = options.actions;

        const responseMeta = buildResponseActionMeta(action, options);

        try {

            let params = get(action, 'payload', undefined);

            const { transformRequest } = options;
            if (transformRequest) {
                params = transformRequest(params);
            }

            const ApiPromise = options.execute(params);

            let request: AxiosResponse<IGetStarshipsSuccessResponse> = yield ApiPromise;

            if (request.status === 200) {
                const { transformResponse } = options;
                let { data } = request;

                if (transformResponse) {
                    data = transformResponse(data);
                }

                yield put(actionSuccess(data, responseMeta));

            } else {
                throw new Error('Not acceptable answer');
            }
        } catch (error) {
            const is404 = !!error.message && error.message.includes('404');
            const isNetworkError =
                !!error.message &&
                (error.message.includes('Could not connect') || error.message.includes('Network Error'));

            let detail = error.message || 'The server cannot process the request';

            if (is404) {
                detail = 'This page does not exist';
            }
            if (isNetworkError) {
                detail = 'Internet connection problem';
            }

            const payload: IStarshipsFailResponse = {
                detail,
            };

            yield put(actionFailure(payload, responseMeta));
        }
    };
