import {REMOTE_REST_URL} from "app-constants";

export const makePageRequestValid = (request: any) => {
    if (typeof request === 'undefined') {
        request = `${REMOTE_REST_URL}starships/?page=1`;
    }
    return request;
};
