import { ajaxActionCreator } from 'utils/action-helpers';
import { GET_STARSHIPS } from './action-types';

export const getStarships = ajaxActionCreator(GET_STARSHIPS);
