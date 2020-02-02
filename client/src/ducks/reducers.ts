import {combineReducers} from "redux";
import {IStarshipsState, starshipReducer} from "ducks/starships/reducers";
import {IUIManagerState} from "dtos/uiManager";
import {uiManagerReducer} from "ducks/uiManager/reducers";

export interface IRootState {
    starships: IStarshipsState;
    uiManager: IUIManagerState;
}

const rootReducer = combineReducers<IRootState>({
    starships: starshipReducer,
    uiManager: uiManagerReducer,
});

export default rootReducer;
