import React, {useCallback, useMemo} from "react";

import {useTitleFromURL} from "utils/common";
import {useDispatch, useSelector} from "react-redux";
import {getStarships} from "ducks/starships/actions";
import {SideMenuItemSpan, SideMenuListItem} from "components/styled-components-custom";
import {makeGetCurrentPageNumber} from "ducks/starships/selectors";

export const SideMenuItem: React.FC<any> = (props: any) => {
    const { url, index } = props;
    const dispatch = useDispatch();
    const titleFromURL = useTitleFromURL(url);
    const currentPageNumber = useSelector(makeGetCurrentPageNumber());



    const liTitle = titleFromURL ? `Page ${titleFromURL}` : `Page Corrupted`;

    const onPageClick = useCallback(() => {
        dispatch(getStarships.request(url, undefined));
    }, []);

    const isCurrentPage = useMemo(() => {
        return currentPageNumber === index + 1;
    }, [currentPageNumber]);

    return (
        <SideMenuListItem tabIndex={index + 1}>
            <div onClick={onPageClick}>
                <SideMenuItemSpan isCurrentPage={isCurrentPage}>{liTitle}</SideMenuItemSpan>
            </div>
        </SideMenuListItem>
    )
};
