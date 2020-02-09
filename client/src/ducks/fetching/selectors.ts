import { IRootState } from 'ducks/reducers';

export const makeGetStarshipsRequestState = () => (state: IRootState) => state.fetching.getStarships;
