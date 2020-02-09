import { createReducer } from 'redux-create-reducer';
import produce from 'immer';
import { GET_STARSHIPS } from 'ducks/starships/action-types';
import { IGetStarshipsSuccessResponse } from 'dtos/starships';
import { findCurrentPageNumber, findPageNumber } from 'utils/common';

export interface IStarshipsState {
    currentPage?: IGetStarshipsSuccessResponse;
    pages: IGetStarshipsSuccessResponse[];
}

export const initialStateReducerStarships: IStarshipsState = {
    pages: [],
};

export const starshipReducer = createReducer<IStarshipsState>(initialStateReducerStarships, {
    [GET_STARSHIPS.REQUEST]: (state: IStarshipsState, action: any) =>
        produce(state, (draft) => {
            const pagesNew = [...state.pages];

            const possibleIndexOf = pagesNew.findIndex((item) => {
                const safePrevious = findPageNumber(item.previous);
                const safeNext = findPageNumber(item.next);
                const safePayload = findPageNumber(action.payload);
                return findCurrentPageNumber(safePrevious, safeNext) === safePayload;
            });

            if (possibleIndexOf !== -1) {
                draft.currentPage = pagesNew[possibleIndexOf];
            }

            return draft;
        }),
    [GET_STARSHIPS.SUCCESS]: (state: IStarshipsState, action: any) =>
        produce(state, (draft) => {
            const pagesNew = [...state.pages];

            if (!pagesNew.some((item) => item.next === action.payload.next)) {
                pagesNew.push(action.payload);
            }

            draft.currentPage = action.payload;
            draft.pages = pagesNew;

            return draft;
        }),
});
