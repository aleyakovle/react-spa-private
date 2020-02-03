import {processSagas} from "utils/saga-helpers";
import {all, delay, put} from "redux-saga/effects";
import {SET_ERROR_MESSAGE_TOAST} from "ducks/uiManager/action-types";
import {setErrorMessageToast} from "ducks/uiManager/actions";

const sagas = {
    * [SET_ERROR_MESSAGE_TOAST]() {
        delay(250);
        yield put(setErrorMessageToast({detail: undefined}));
    },
};

export default function* () {
    yield all([...processSagas(sagas)]);
}
