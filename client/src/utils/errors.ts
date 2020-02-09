import { IStarshipsFailResponse } from 'dtos/common';

export class RESTError extends Error {
    public readonly data: IStarshipsFailResponse;

    constructor(data: IStarshipsFailResponse) {
        const message = 'REST call method error';

        super(message);
        this.name = 'RESTError';
        this.message = message;
        this.data = data;
    }
}
