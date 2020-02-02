import React from "react";
import styled from 'styled-components';
import {compose} from "redux";
import {withPageNameHOC} from "HOCs/with-page-name";
import {FullHeightWrapper} from "HOCs/full-height-wrapper";

const SideMenu = styled.div`
    background-color: blue;
    display: flex;
    flex: 1;
`;

export const PageContainerComposed: React.FC<any> = () => {
    return (
        <SideMenu>
            <p>Side menu</p>
        </SideMenu>
    )
};

export const PageContainer = compose(
    withPageNameHOC,
    FullHeightWrapper,
)(PageContainerComposed) as React.ComponentType<any>;
