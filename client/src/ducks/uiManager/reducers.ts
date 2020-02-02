import {createReducer} from "redux-create-reducer";
import produce from "immer";
import {IUIManagerState} from "dtos/uiManager";
import {SET_LANGUAGE} from "ducks/uiManager/action-types";

export const initialStateReducerUIManager: IUIManagerState = {
    language: 'en-EN',
};

export const uiManagerReducer = createReducer<IUIManagerState>(initialStateReducerUIManager, {
    [SET_LANGUAGE]: (
        state: IUIManagerState,
    ) =>
        produce(state, draft => {
            return draft;
        }),
});
