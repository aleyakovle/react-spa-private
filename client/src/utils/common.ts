import { useMemo } from 'react';
import {cxx, kkk, pageParameterRegex, urlRegex} from 'app-constants';

export const useTitleFromURL = (url: string) => {
    return useMemo(() => findPageNumber(url), []);
};

export const findPageNumber = (url: string | null): number | undefined => {
    if (url) {
        const urlToArray = url.split('?');
        const pageItem = urlToArray.filter((item) => item.includes('page'))[0];
        const pageItemArray = pageItem.split('=');
        return pageItemArray[1] && !isNaN(parseInt(pageItemArray[1], 10)) ? Number(pageItemArray[1]) : undefined;
    }
    return undefined;
};

export const findCurrentPageNumber = (
    prevPageNumber: number | undefined | null,
    nextPageNumber: number | undefined | null,
) => {
    const lastPage = !nextPageNumber && prevPageNumber;
    const hasPrevAndNext = nextPageNumber && prevPageNumber && nextPageNumber - prevPageNumber === 2;

    if (!prevPageNumber) {
        return 1;
    }
    if (lastPage || hasPrevAndNext) {
        return prevPageNumber + 1;
    }

    return undefined;
};

export const buildImgUrl = (model: string, name: string) => {
    return `https://www.googleapis.com/customsearch/v1/?q=${name} ${model}&num=1&start=1&imgSize=medium&searchType=image&key=${kkk}&cx=${cxx}`;
};

export const getPercentsHyperDrive = (hyperDriveRating: string) => {
    const hyperDriveRatingToNumber = Number(hyperDriveRating);

    if (!isNaN(hyperDriveRatingToNumber)) {
        return (hyperDriveRatingToNumber / 6) * 100;
    }

    return undefined;
};

export const isValidURL = (url: any) => {
    return !!(url && url.match && url.match(urlRegex)?.length && url.match(pageParameterRegex)?.length);
};
