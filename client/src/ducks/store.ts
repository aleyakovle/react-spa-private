import {applyMiddleware, createStore, Store} from "redux";
import {persistStore, persistReducer, Persistor} from "redux-persist";
import localForage from 'localforage';
import createSagaMiddleware from "redux-saga";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer, {IRootState} from "./reducers";
import rootSaga from "./sagas";
import globalErrorSagaMiddleware from "middlewares/global-error";

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer({
    key: 'root',
    storage: localForage,
    whitelist: ['starships'],
}, rootReducer);


const store: Store<IRootState> = createStore(
    persistedReducer,
    composeWithDevTools(
        applyMiddleware(
            sagaMiddleware,
            globalErrorSagaMiddleware,
        )
    ),
);

export const persistor: Persistor = persistStore(store, {}, () => {});
sagaMiddleware.run(rootSaga);

export {store};
