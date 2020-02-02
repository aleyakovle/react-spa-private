import {
    GET_STARSHIPS,
} from "./action-types";
import {ajaxActionCreator} from "utils/action-helpers";

export const getStarships = ajaxActionCreator(GET_STARSHIPS);
