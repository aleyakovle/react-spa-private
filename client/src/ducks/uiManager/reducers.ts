import { createReducer } from 'redux-create-reducer';
import produce from 'immer';
import { IUIManagerState } from 'dtos/uiManager';
import { SET_ERROR_MESSAGE_TOAST, SET_LANGUAGE } from 'ducks/uiManager/action-types';

export const initialStateReducerUIManager: IUIManagerState = {
    language: 'en-EN',
    errorMessage: undefined,
};

export const uiManagerReducer = createReducer<IUIManagerState>(initialStateReducerUIManager, {
    [SET_LANGUAGE]: (state: IUIManagerState) =>
        produce(state, (draft) => {
            return draft;
        }),
    [SET_ERROR_MESSAGE_TOAST]: (state: IUIManagerState, action: any) =>
        produce(state, (draft) => {
            draft.errorMessage = action.payload.detail;
            return draft;
        }),
});
