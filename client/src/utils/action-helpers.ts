import {IAjaxActionNames} from "dtos/common";
import {
    AJAX_POSTFIX_FAILURE,
    AJAX_POSTFIX_INIT,
    AJAX_POSTFIX_SUCCESS,
    AJAX_PREFIX,
    DUCK_ACTION_PREFIX
} from "app-constants";
import {ActionMeta, createAction} from "redux-actions";

export const createActionSimple = <P = any, M = any>(type: string) =>
    createAction<P, M, P, M>(type, payload => payload, (_, meta) => meta);

export const prefixDuckActionName = (actionName: string): string =>
    `${DUCK_ACTION_PREFIX}${actionName}`;

export const ajaxActionNameCreator = (
    actionName: string
): IAjaxActionNames => ({
    REQUEST: prefixDuckActionName(
        `${AJAX_PREFIX}_${actionName}_${AJAX_POSTFIX_INIT}`
    ),
    SUCCESS: prefixDuckActionName(
        `${AJAX_PREFIX}_${actionName}_${AJAX_POSTFIX_SUCCESS}`
    ),
    FAILURE: prefixDuckActionName(
        `${AJAX_PREFIX}_${actionName}_${AJAX_POSTFIX_FAILURE}`
    ),
});

export type IActionFunctionMeta<Payload, Meta> = (
    payload: Payload,
    meta: Meta
) => ActionMeta<Payload, Meta>;

export interface IAjaxActionCreators<RequestPayload = any,
    RequestMeta = any,
    SuccessPayload = any,
    SuccessMeta = any,
    FailurePayload = any,
    FailureMeta = any> {
    request: IActionFunctionMeta<RequestPayload, RequestMeta>;
    success: IActionFunctionMeta<SuccessPayload, SuccessMeta>;
    failure: IActionFunctionMeta<FailurePayload, FailureMeta>;
}

export const ajaxActionCreator = <RequestPayload = any,
    SuccessPayload = any,
    FailurePayload = any,
    RequestMeta = any,
    SuccessMeta = any,
    FailureMeta = any>(
    actionNames: IAjaxActionNames
): IAjaxActionCreators<RequestPayload,
    RequestMeta,
    SuccessPayload,
    SuccessMeta,
    FailurePayload,
    FailureMeta> => ({
    request: createActionSimple<RequestPayload, RequestMeta>(actionNames.REQUEST),
    success: createActionSimple<SuccessPayload, SuccessMeta>(actionNames.SUCCESS),
    failure: createActionSimple<FailurePayload, FailureMeta>(actionNames.FAILURE),
});

