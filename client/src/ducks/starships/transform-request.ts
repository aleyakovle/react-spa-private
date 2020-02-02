export const makePageRequestValid = (request: any) => {
    if (typeof request === 'undefined' || !isNaN(request)) {
        request = 4;
    }
    return request;
};
