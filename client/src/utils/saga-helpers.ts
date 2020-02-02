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

export interface ISagaInitActionMeta {
    dispatchOnSuccess?: Array<(data: any, meta: { originalAction: ActionMeta<any, any> }) => ActionMeta<any, any>>;
    dispatchOnError?: Array<(error: Error, meta: { originalAction: ActionMeta<any, any> }) => ActionMeta<any, any>>;
}

export const buildResponseActionMeta = (action: ActionMeta<any, any>, options: IRequestCallParams) => {
    return {
        ...action.meta,
        options,
        originalAction: action,
    };
};

export const apiRequestSaga = (options: IRequestCallParams): ISagaWrapper =>
    function*(action: ActionMeta<any, ISagaInitActionMeta>) {
        const { success: actionSuccess, failure: actionFailure } = options.actions;

        const responseMeta = buildResponseActionMeta(action, options);

        try {
            let params = get(action, 'payload.params', undefined);

            const { transformRequest } = options;
            if (transformRequest) {
                params = transformRequest(params, action.payload);
            }

            const ApiPromise = options.execute(params);

            let request: AxiosResponse<IGetStarshipsSuccessResponse> = yield ApiPromise;

            const { transformResponse } = options;
            if (transformResponse) {
                request = transformResponse(request, action.payload);
            }

            const { data } = request;

            yield put(actionSuccess(data, responseMeta));
            if (action.meta && action.meta.dispatchOnSuccess) {
                for (const actionCreator of action.meta.dispatchOnSuccess) {
                    yield put(actionCreator(data, responseMeta));
                }
            }
        } catch (error) {
            const is404 = !!error.message && error.message.includes('404');
            const isNetworkError =
                !!error.message &&
                (error.message.includes('Could not connect') || error.message.includes('Network Error'));

            let detail = 'The server cannot process the request';

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
