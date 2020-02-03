import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import {
    persistor,
    store,
} from 'ducks/store';
import { RootContainer } from 'containers/root';

export const App: React.FC<any> = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={<CircularProgress />}>
                <BrowserRouter>
                    <RootContainer />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
};
