import {ActionMeta, BaseAction} from "redux-actions";
import {IActionRequestProgressState} from "utils/action-helpers";

export interface IStarshipsFailResponse {
    detail: string,
}

export type IActionFunctionMeta<Payload, Meta> = (
    payload?: Payload,
    meta?: Meta
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
    downloadProgress: IActionFunctionMeta<IActionRequestProgressState, any>;
    uploadProgress: IActionFunctionMeta<IActionRequestProgressState, any>;
    cancel: () => BaseAction;
    setCancelFunction: IActionFunctionMeta<null | (() => void), any>;
}

export interface IAPISchemaSimple {
    methodName: string;
    actions: IAjaxActionCreators;

    transformRequest?: (data: any, params?: any) => any;
    transformResponse?: (data: any, params?: any) => any;
}

export interface IAjaxActionNames {
    FAILURE: string;
    REQUEST: string;
    SUCCESS: string;
}
