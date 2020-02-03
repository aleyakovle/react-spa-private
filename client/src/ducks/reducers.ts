import {combineReducers} from "redux";
import {IStarshipsState, starshipReducer} from "ducks/starships/reducers";
import {IUIManagerState} from "dtos/uiManager";
import {uiManagerReducer} from "ducks/uiManager/reducers";
import {IFetchingState} from "ducks/fetching";
import fetchingReducer from "ducks/fetching/reducers";

export interface IRootState {
    starships: IStarshipsState;
    fetching: IFetchingState;
    uiManager: IUIManagerState;
}

const rootReducer = combineReducers<IRootState>({
    starships: starshipReducer,
    fetching: fetchingReducer,
    uiManager: uiManagerReducer,
});

export default rootReducer;
