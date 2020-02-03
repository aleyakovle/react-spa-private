export const makePageRequestValid = (request: any) => {
    if (typeof request === 'undefined' || !isNaN(request)) {
        request = 1;
    }
    return request;
};
