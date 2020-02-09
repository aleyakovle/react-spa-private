import { createSelector, Selector } from 'reselect';
import { IRootState } from 'ducks/reducers';

export const createSimpleSelector = <R>(selector: Selector<IRootState, R>) =>
    createSelector<IRootState, R, R>(selector, (res) => res);
