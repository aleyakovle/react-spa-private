import {useMemo} from "react";
import {cxx, kkk} from "app-constants";

export const useTitleFromURL = (url: string) => {
    return useMemo(() => findPageNumber(url), []);
};

export const findPageNumber = (url: string | null) : number | undefined => {
    if (url) {
        const urlToArray = url.split("?");
        const pageItem = urlToArray.filter(item => item.includes("page"))[0];
        const pageItemArray = pageItem.split("=");
        return pageItemArray[1] && !isNaN(parseInt(pageItemArray[1])) ? Number(pageItemArray[1]) : undefined;
    } return undefined;
};

export const buildImgUrl = (model: string, name: string) => {
    return `https://www.googleapis.com/customsearch/v1/?q=${name} ${model}&num=1&start=1&imgSize=medium&searchType=image&key=${kkk}&cx=${cxx}`;
};
