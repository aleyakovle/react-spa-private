import { createSimpleSelector } from 'utils/selector-helpers';
import { IStarship } from 'dtos/starships';

export const makeGetCurrentPage = () => createSimpleSelector<number>(({ starships }) => starships.currentPage);

export const makeGetCurrentPageResults = () =>
    createSimpleSelector<IStarship[]>(({ starships }) =>
        starships.pages[starships.currentPage - 1] && starships.pages[starships.currentPage - 1].results
            ? starships.pages[starships.currentPage - 1].results
            : [],
    );
