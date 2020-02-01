import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'ducks/store';
import { CircularProgress } from "@material-ui/core";

export const App: React.FC<any> = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={<CircularProgress />}>
                <p>Hello Redux</p>
            </PersistGate>
        </Provider>
    );
};
