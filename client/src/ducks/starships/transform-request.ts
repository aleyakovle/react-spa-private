import { REMOTE_REST_URL_INITIAL_PAGE } from 'app-constants';
import { isValidURL } from 'utils/common';

export const makePageRequestValid = (request: any) => {
    if (!isValidURL(request)) {
        return REMOTE_REST_URL_INITIAL_PAGE;
    }
    return request;
};
