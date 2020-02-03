import React, {useCallback, useMemo} from "react";

import {useTitleFromURL} from "utils/common";
import {useDispatch, useSelector} from "react-redux";
import {getStarships} from "ducks/starships/actions";
import {SideMenuListItem} from "components/styled-components-custom";
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

    const renderIsCurrentPage = useMemo(() => {
        return currentPageNumber === index + 1 ? 'o' : '';
    }, [currentPageNumber]);

    return (
        <SideMenuListItem tabIndex={index + 1}>
            <div onClick={onPageClick}>
                <span>{liTitle} {renderIsCurrentPage}</span>
            </div>
        </SideMenuListItem>
    )
};
