import { apiRequestSaga, processSagas } from 'utils/saga-helpers';
import { all } from 'redux-saga/effects';
import { GET_STARSHIPS } from 'ducks/starships/action-types';
import { apiStarships } from 'ducks/starships/api';

const sagas = {
    [GET_STARSHIPS.REQUEST]: apiRequestSaga(apiStarships.getStarships),
};

export default function*() {
    yield all([...processSagas(sagas)]);
}
