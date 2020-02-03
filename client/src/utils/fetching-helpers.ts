import {combineReducers, Reducer} from "redux";
import {createReducer} from "redux-create-reducer";
import {IAjaxActionNames, IAPIEndpointState} from "dtos/common";


export const apiActionListener = (
    actionNames: IAjaxActionNames
): Reducer<IAPIEndpointState> => {
    const initialFetchingReducer = false;

    const fetchingReducer = createReducer<boolean>(initialFetchingReducer, {
        [actionNames.REQUEST]: () => true,
        [actionNames.FAILURE]: () => false,
        [actionNames.SUCCESS]: () => false
    });

    return combineReducers<IAPIEndpointState>({
        isFetching: fetchingReducer,
    });
};
