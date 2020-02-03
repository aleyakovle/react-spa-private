import {all, fork} from "redux-saga/effects";
import starshipSaga from "ducks/starships/sagas";
import uiManagerSaga from "ducks/uiManager/sagas";

export default function* rootSaga() {
    yield all([
        fork(starshipSaga),
        fork(uiManagerSaga),
    ]);
}
