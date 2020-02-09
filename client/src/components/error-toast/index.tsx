import React from 'react';
import { Snackbar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { makeGetErrorMessage } from 'ducks/uiManager/selectors';

export const ErrorToastElement: React.FC<any> = () => {
    const error = useSelector(makeGetErrorMessage());

    return <Snackbar open={!!error} autoHideDuration={6000} message={error} />;
};
