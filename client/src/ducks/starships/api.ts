import {restRequest} from "utils/rest-request";
import {
    getStarships
} from "./actions";
import {makePageRequestValid} from "ducks/starships/transform-request";
import {makePageResponseValid} from "ducks/starships/transform-response";

export const apiStarships = restRequest.buildSchema({
    getStarships: {
        methodName: "starships",
        actions: getStarships,
        transformRequest: makePageRequestValid,
        transformResponse: makePageResponseValid,
    },
});
