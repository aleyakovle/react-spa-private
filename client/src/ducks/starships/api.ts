import { restRequest } from 'utils/rest-request';
import { makePageRequestValid } from 'ducks/starships/transform-request';
import { makePageResponseValid } from 'ducks/starships/transform-response';
import { getStarships } from './actions';

export const apiStarships = restRequest.buildSchema({
    getStarships: {
        methodName: 'starships',
        actions: getStarships,
        transformRequest: makePageRequestValid,
        transformResponse: makePageResponseValid,
    },
});
