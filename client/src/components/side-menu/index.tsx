import React from "react";
import styled from 'styled-components';
import {compose} from "redux";
import {withPageNameHOC} from "HOCs/with-page-name";
import {useSelector} from "react-redux";
import {makeGetAllPageLinks} from "ducks/starships/selectors";
import {SideMenuItem} from "components/side-menu-item";
// import {FullHeightWrapper} from "HOCs/full-height-wrapper";

const SideMenu = styled.div`
    // background-color: grey;
`;

export const SideMenuContainerComposed: React.FC<any> = () => {
    const pageLinks = useSelector(makeGetAllPageLinks());

    return (
        <SideMenu>
            <ul>
                {pageLinks.map(item => <SideMenuItem url={item} />)}
            </ul>
        </SideMenu>
    )
};

export const SideMenuContainer = compose(
    withPageNameHOC,
    // FullHeightWrapper,
)(SideMenuContainerComposed) as React.ComponentType<any>;
