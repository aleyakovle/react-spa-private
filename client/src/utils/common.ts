import {useMemo} from "react";

export const useTitleFromURL = (url: string) => {
    return useMemo(() => findPageNumber(url), []);
};

const findPageNumber = (url: string) => {
    const urlToArray = url.split("?");
    const pageItem = urlToArray.filter(item => item.includes("page"))[0];
    const pageItemArray = pageItem.split("=");
    return pageItemArray[1] ? pageItemArray[1] : undefined;
};
