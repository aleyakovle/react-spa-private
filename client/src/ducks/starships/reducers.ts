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
    currentPage: 1,
    pages: []
};

export const starshipReducer = createReducer<IStarshipsState>(initialStateReducerStarships, {
    [GET_STARSHIPS.REQUEST]: (
        state: IStarshipsState,
        action: any,
    ) =>
        produce(state, draft => {
            console.log(state, 'state');
            console.log(action, 'action');
            // const pagesNew = [...state.pages];
            // pagesNew[state.currentPage - 1] = action;
            // draft.pages = pagesNew;
            return draft;
        }),
    [GET_STARSHIPS.SUCCESS]: (
        state: IStarshipsState,
        action: any,
    ) =>
        produce(state, draft => {
            console.log(state, 'state');
            console.log(action, 'action');
            const pagesNew = [...state.pages];
            pagesNew[state.currentPage - 1] = action.payload;
            draft.pages = pagesNew;
            return draft;
        }),
});
