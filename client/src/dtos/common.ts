export interface IStarshipsFailResponse {
    detail: string;
}

export interface IAjaxActionNames {
    FAILURE: string;
    REQUEST: string;
    SUCCESS: string;
}

export interface IAPIEndpointState {
    isFetching: boolean;
}
