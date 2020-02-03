import {Dispatch, Middleware, Store} from "redux";
import {ActionMeta} from "redux-actions";
import {
    AJAX_POSTFIX_FAILURE,
} from "app-constants";
import {IRequestCallParams} from "utils/rest-request";
import {IRootState} from "ducks/reducers";
import {setErrorMessageToast} from "ducks/uiManager/actions";

const globalErrorSagaMiddleware = (store: Store<IRootState>) => (
    next: Dispatch
) => (action: ActionMeta<any, IRequestCallParams>): any => {
    const {type} = action;

    if (type.endsWith(AJAX_POSTFIX_FAILURE)) {
        store.dispatch(setErrorMessageToast(action.payload));
    }

    return next(action);
};

export default globalErrorSagaMiddleware as Middleware;
