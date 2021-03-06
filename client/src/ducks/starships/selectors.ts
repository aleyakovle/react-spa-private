import { createSimpleSelector } from 'utils/selector-helpers';
import { IGetStarshipsSuccessResponse, IStarship } from 'dtos/starships';
import { REMOTE_REST_URL_INITIAL_PAGE } from 'app-constants';
import { findCurrentPageNumber, findPageNumber } from 'utils/common';

export const makeGetCurrentPage = () =>
    createSimpleSelector<IGetStarshipsSuccessResponse | undefined>(({ starships }) => starships.currentPage);

export const makeGetCurrentPageStarships = () =>
    createSimpleSelector<IStarship[]>(({ starships }) => starships.currentPage?.results ?? []);

export const makeGetNextPageNumber = () =>
    createSimpleSelector<string | null>(({ starships }) => starships.currentPage?.next ?? null);

export const makeGetPrevPageNumber = () =>
    createSimpleSelector<string | null>(({ starships }) => starships.currentPage?.previous ?? null);

export const makeGetAllPageLinks = () =>
    createSimpleSelector<string[]>(({ starships }) => {
        if (starships && starships.pages) {
            const unsortedLinksArrayWithDuplicatesAndNulls = starships.pages.reduce(
                (acc: Array<string | null>, item: IGetStarshipsSuccessResponse) => {
                    return [...acc, item.next, item.previous];
                },
                [] as Array<string | null>,
            );
            const unsortedLinksArrayWithDuplicatesAndNullsWithInitialPage = [
                ...unsortedLinksArrayWithDuplicatesAndNulls,
                REMOTE_REST_URL_INITIAL_PAGE,
            ];
            const unsortedLinksArrayWithDuplicates: string[] = unsortedLinksArrayWithDuplicatesAndNullsWithInitialPage.filter(
                (item: string | null) => typeof item === 'string',
            ) as string[];
            const unsortedLinksSet = new Set(unsortedLinksArrayWithDuplicates);
            const unsortedLinksArray = [...unsortedLinksSet];
            return unsortedLinksArray.sort();
        }
        return [];
    });

export const makeGetCurrentPageNumber = () =>
    createSimpleSelector<number | undefined>(({ starships }) => {
        if (starships.currentPage) {
            const { next, previous } = starships.currentPage;

            const prevPageNumber = findPageNumber(previous);
            const nextPageNumber = findPageNumber(next);

            return findCurrentPageNumber(prevPageNumber, nextPageNumber);
        }

        return undefined;
    });
