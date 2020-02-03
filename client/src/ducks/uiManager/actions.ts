import { createAction } from 'redux-actions';
import { SET_ERROR_MESSAGE_TOAST, SET_LANGUAGE } from 'ducks/uiManager/action-types';

export const setLanguage = createAction(SET_LANGUAGE);
export const setErrorMessageToast = createAction(SET_ERROR_MESSAGE_TOAST);
