import {REMOTE_REST_URL} from "app-constants";

export const makePageRequestValid = (request: any) => {
    console.log(request, 'request makePageRequestValid');
    if (typeof request === 'undefined') {
        request = `${REMOTE_REST_URL}starships/?page=1`;
    }
    return request;
};
