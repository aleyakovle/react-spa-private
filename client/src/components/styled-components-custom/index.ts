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

export const MaterialCard = styled.div`
    border-radius: 4px;
    margin: 20px 0;
    width: 100%;
    height: calc(100% - 40px);
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    overflow: hidden;
`;

export const StarShipMainWrapper = styled.div`
    border-bottom: 1px solid rgba(0,0,0,0.12);
    width: 100%;
`;

export const StarShipInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const StarShipImageWrapper = styled.div`
    display: block;
    width: 100%;
    padding-bottom: 75%;
    background-color: red;
`;

export const SideMenuList = styled.ul`
    list-style: none;
    margin: 10px;
    padding: 0;
`;

export const SideMenuListItem = styled.li`
    margin: 0;
    padding: 0;
    text-overflow: ellipsis;
    color: #007bff;
    cursor: pointer;
    opacity: .75;
    white-space: nowrap;
    transition: opacity 0.2s ease;
    &:hover {
        opacity: 1;
    }
`;

export const StarShipInfoSpan = styled.span`
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
`;

export const StarShipListWrapper = styled.div`
    &:focus, &:active {
        border: 3px solid rgba(38,143,255);
    }
`;
