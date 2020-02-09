import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { Dispatch, useMemo } from 'react';
import { IRootState } from 'ducks/reducers';

export const useMapState = <T = any>(mapState: (state: IRootState) => T, deps: any[] = []) => {
    const state: any = useSelector((defaultState) => defaultState);

    return useMemo(() => mapState(state), [state, ...deps]);
};

export const useMapDispatch = <T = any>(mapDispatch: (dispatch: Dispatch<any>) => T, deps: any[] = []) => {
    const dispatch = useDispatch();
    return useMemo(() => mapDispatch(dispatch), [dispatch, ...deps]);
};

export function usePageUrl() {
    let location = useLocation();

    return {
        fullPath: location.pathname,
    };
}
