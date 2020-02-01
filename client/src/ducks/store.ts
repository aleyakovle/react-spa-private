import {applyMiddleware, createStore, Store} from "redux";
import {persistStore, persistReducer, Persistor} from "redux-persist";
import localForage from 'localforage';
import rootReducer, {IRootState} from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";

const persistedReducer = persistReducer({
    key: 'root',
    storage: localForage,
    whitelist: ['starships'],
}, rootReducer);


const store: Store<IRootState> = createStore(
    persistedReducer,
    composeWithDevTools(
        applyMiddleware(

        )
    ),
);

const persistor: Persistor = persistStore(store, {}, () => {});

export {store, persistor};
