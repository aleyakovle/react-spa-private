import {createReducer} from "redux-create-reducer";
import produce from "immer";
import {GET_STARSHIPS} from "ducks/starships/action-types";
import {IGetStarshipsSuccessResponse} from "dtos/starships";
// import {Action} from "redux-actions";
// import {AxiosResponse} from "axios";

export interface IStarshipsState {
    currentPage: number,
    pages: IGetStarshipsSuccessResponse[]
}

export const initialStateReducerStarships: IStarshipsState = {
    currentPage: 0,
    pages: []
};

export const starshipReducer = createReducer<IStarshipsState>(initialStateReducerStarships, {
    [GET_STARSHIPS.SUCCESS]: (
        state: IStarshipsState,
        action: any,
    ) =>
        produce(state, draft => {
            console.log(action, 'action');
            return draft;
        }),
});
