import {ajaxActionNameCreator, prefixDuckActionName} from "utils/action-helpers";

export const GET_STARSHIPS = ajaxActionNameCreator("GET_STARSHIPS");
export const GOTO_NEXT_PAGE = prefixDuckActionName("GOTO_NEXT_PAGE");
export const GOTO_PREV_PAGE = prefixDuckActionName("GOTO_PREV_PAGE");
export const INCREASE_CURRENT_PAGE = prefixDuckActionName("INCREASE_CURRENT_PAGE");
export const DECREASE_CURRENT_PAGE = prefixDuckActionName("DECREASE_CURRENT_PAGE");
