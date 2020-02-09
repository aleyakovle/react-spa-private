import { combineReducers } from 'redux';
import { apiActionListener } from 'utils/fetching-helpers';
import { GET_STARSHIPS } from 'ducks/starships/action-types';
import { IAPIEndpointState } from 'dtos/common';

export interface IFetchingState {
    getStarships: IAPIEndpointState;
}

const fetchingReducer = combineReducers<IFetchingState>({
    getStarships: apiActionListener(GET_STARSHIPS),
});

export default fetchingReducer;
