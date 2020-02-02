import React from "react";
import styled from 'styled-components';

const SideMenu = styled.div`
  width: 500px;
  height: 500px;
  background-color: grey;
`;

export const SideMenuContainer: React.FC<any> = () => {
    return (
        <SideMenu/>
    )
};
