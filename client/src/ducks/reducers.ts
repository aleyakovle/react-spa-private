import {combineReducers} from "redux";
import {IStarshipsState, starshipReducer} from "ducks/starships/reducers";

export interface IRootState {
    starships: IStarshipsState;
}

const rootReducer = combineReducers<IRootState>({
    starships: starshipReducer,
});

export default rootReducer;
