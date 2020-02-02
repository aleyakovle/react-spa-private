import React from "react";
import { compose } from 'redux';
import {withPageNameHOC} from "HOCs";
import {SideMenuContainer} from "components/side-menu";
import styled from "styled-components";

const Root = styled.div`
  width: 100%;
  height: 100%;
  background-color: green;
`;


class RootContainerComposed extends React.Component<any> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Root>
                <SideMenuContainer/>
                <p>Hello</p>
            </Root>
        );
    }
}

export const RootContainer = compose(
    withPageNameHOC,
)(RootContainerComposed) as React.ComponentType<any>;
