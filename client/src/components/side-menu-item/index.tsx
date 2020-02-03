import React, {useCallback} from "react";

import {useTitleFromURL} from "utils/common";
import {useDispatch} from "react-redux";
import {getStarships} from "ducks/starships/actions";

const SideMenuItemElement: React.FC<any> = (props: any) => {
    const { url } = props;
    const titleFromURL = useTitleFromURL(url);
    const dispatch = useDispatch();
    const liTitle = titleFromURL ? `Page ${titleFromURL}` : `Page Corrupted`;
    const onPageClick = useCallback(() => {
        dispatch(getStarships.request(url, undefined));
    }, []);

    return (
        <li>
            <div onClick={onPageClick}>
                <span>{liTitle}</span>
            </div>
        </li>
    )
};

export const SideMenuItem = SideMenuItemElement;
