import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
    },
}));

interface ILinearProgress {
    isFetching: boolean;
}

export const LinearProgressCustom: React.FC<ILinearProgress> = (props: any) => {
    const { isFetching } = props;

    const classes = useStyles();

    if (!isFetching) {
        return null;
    }

    return (
        <div className={classes.root}>
            <LinearProgress color={'primary'} />
        </div>
    );
};
