import {createReducer} from "redux-create-reducer";
import produce from "immer";
import {GET_STARSHIPS} from "ducks/starships/action-types";
import {IGetStarshipsSuccessResponse} from "dtos/starships";

export type IStarshipsState = IGetStarshipsSuccessResponse

export const initialStateReducerStarships: IStarshipsState = {
    count: 0,
    next: null,
    previous: null,
    results: []
};

export const starshipReducer = createReducer<IStarshipsState>(initialStateReducerStarships, {
    [GET_STARSHIPS.SUCCESS]: (
        state: IStarshipsState,
    ) =>
        produce(state, draft => {
            return draft;
        }),
});
