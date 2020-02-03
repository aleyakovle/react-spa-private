import {
    DECREASE_CURRENT_PAGE,
    GET_STARSHIPS, GOTO_NEXT_PAGE, GOTO_PREV_PAGE, INCREASE_CURRENT_PAGE,
} from "./action-types";
import {ajaxActionCreator} from "utils/action-helpers";
import {createAction} from "redux-actions";

export const getStarships = ajaxActionCreator(GET_STARSHIPS);
export const gotoNextPage = createAction(GOTO_NEXT_PAGE);
export const gotoPrevPage = createAction(GOTO_PREV_PAGE);
export const increasecurrentPageNumber = createAction(INCREASE_CURRENT_PAGE);
export const decreasecurrentPageNumber = createAction(DECREASE_CURRENT_PAGE);
