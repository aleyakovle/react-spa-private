import { createReducer } from 'redux-create-reducer';
import produce from 'immer';
import { GET_STARSHIPS } from 'ducks/starships/action-types';
import { IGetStarshipsSuccessResponse } from 'dtos/starships';

export interface IStarshipsState {
    currentPage?: IGetStarshipsSuccessResponse;
    pages: IGetStarshipsSuccessResponse[];
}

export const initialStateReducerStarships: IStarshipsState = {
    pages: [],
};

export const starshipReducer = createReducer<IStarshipsState>(initialStateReducerStarships, {
    [GET_STARSHIPS.SUCCESS]: (state: IStarshipsState, action: any) =>
        produce(state, (draft) => {
            const pagesNew = [...state.pages];

            if (!pagesNew.some(item => item.next === action.payload.next)) {
                pagesNew.push(action.payload);
            }

            draft.currentPage = action.payload;
            draft.pages = pagesNew;

            return draft;
        }),
});
