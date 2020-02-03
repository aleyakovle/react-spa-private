import React, {useCallback} from "react";

import {useTitleFromURL} from "utils/common";
import {useDispatch} from "react-redux";
import {getStarships} from "ducks/starships/actions";
import {SideMenuListItem} from "components/styled-components-custom";

export const SideMenuItem: React.FC<any> = (props: any) => {
    const { url } = props;
    const dispatch = useDispatch();
    const titleFromURL = useTitleFromURL(url);

    const liTitle = titleFromURL ? `Page ${titleFromURL}` : `Page Corrupted`;

    const onPageClick = useCallback(() => {
        dispatch(getStarships.request(url, undefined));
    }, []);

    return (
        <SideMenuListItem>
            <div onClick={onPageClick}>
                <span>{liTitle}</span>
            </div>
        </SideMenuListItem>
    )
};
