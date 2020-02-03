import React from "react";
import styled from 'styled-components';
import {compose} from "redux";
import {withPageNameHOC} from "HOCs/with-page-name";
import {FullHeightWrapper} from "HOCs/full-height-wrapper";

const SideMenu = styled.div`
    background-color: grey;
    max-width: 100%;
    max-height: 100%;
`;

export const SideMenuContainerComposed: React.FC<any> = () => {
    return (
        <SideMenu>
            <p>Side menu</p>
        </SideMenu>
    )
};

export const SideMenuContainer = compose(
    withPageNameHOC,
    FullHeightWrapper,
)(SideMenuContainerComposed) as React.ComponentType<any>;
