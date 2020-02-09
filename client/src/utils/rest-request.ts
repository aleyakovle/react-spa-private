import axios from 'axios';
import { IAjaxActionCreators } from 'utils/action-helpers';
import { REMOTE_REST_URL } from 'app-constants';

export interface IAPISchemaSimple {
    methodName: string;
    actions: IAjaxActionCreators;

    transformRequest?: (data: any, params?: any) => any;
    transformResponse?: (data: any, params?: any) => any;
}

export interface IRequestCallParams {
    execute: any;
    actions: IAjaxActionCreators;

    transformRequest?: (data: any, params?: any) => any;
    transformResponse?: (data: any, params?: any) => any;
}

export interface IRESTExecuteParams {
    methodName: string;
    params: string;
    id?: number | null;
}

export type IRESTCallSchema<K extends string = string> = {
    [T in K]: IAPISchemaSimple;
};

export type IRESTCallParams<K extends string = string> = {
    [T in K]: IRequestCallParams;
};

export interface ISendRPCResponseOptions {
    contentType: 'application/json';
    data: IRESTExecuteParams;
}

class RESTRequest {
    private restURL = REMOTE_REST_URL;

    private createValidRESTObject = (data: IRESTExecuteParams) => {
        const { methodName: method, params: requestParams } = data as IRESTExecuteParams;

        if (!String(requestParams).includes('https://')) {
            return `${this.restURL}${method}/?page=${requestParams}`;
        }
        return requestParams;
    };

    private sendResponse = (options: ISendRPCResponseOptions) => {
        const url = this.createValidRESTObject(options.data);
        return axios.get(url);
    };

    private simpleFactory = (request: IRESTExecuteParams) => {
        return this.sendResponse({
            contentType: 'application/json',
            data: request,
        });
    };

    public buildSchema = <K extends string = string>(schema: IRESTCallSchema<K>): IRESTCallParams<K> => {
        if (!Object.keys(schema).length) {
            return {} as IRESTCallParams<K>;
        }

        const keyValueDictionary: Array<[string, IAPISchemaSimple]> = Array.from(Object.entries(schema));

        return keyValueDictionary.reduce((accumulator: IRESTCallParams<K>, current) => {
            const [method, paramsOld] = current;

            const { methodName } = paramsOld;
            const currentCallSchema: IRequestCallParams = {
                actions: paramsOld.actions,
                transformRequest: paramsOld.transformRequest,
                transformResponse: paramsOld.transformResponse,
                execute: (params: any) => {
                    const request: IRESTExecuteParams = {
                        params,
                        methodName,
                    };

                    return this.simpleFactory(request);
                },
            };

            return {
                ...accumulator,
                [method]: currentCallSchema,
            };
        }, {} as IRESTCallParams<K>);
    };
}

export const restRequest = new RESTRequest();
