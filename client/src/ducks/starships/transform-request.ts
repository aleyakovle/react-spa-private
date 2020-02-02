export const makePageRequestValid = (request: any) => {
    if (typeof request === 'undefined' || !isNaN(request)) {
        request = 5;
    }
    return request;
};
