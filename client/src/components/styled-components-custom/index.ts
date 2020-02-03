import styled from "styled-components";

export const Page = styled.div`
    max-width: 100%;
    width: 100%;
    max-height: 100%;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
`;

export const FullHeight = styled.div`
    height: ${window.innerHeight}px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PageControlWrapper = styled.div`
    position: fixed;
`;
