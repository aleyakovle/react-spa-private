import {all, fork} from "redux-saga/effects";
import starshipSaga from "ducks/starships/sagas";

export default function* rootSaga() {
    yield all([
        fork(starshipSaga),
    ]);
}
