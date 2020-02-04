import styled from "styled-components";
import {images} from "assets/images";

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

export const PageControlItem = styled.div`
    display: flex;
    flex: 1;
    padding: 10px;
    border-radius: 4px;
    position: fixed;
    align-items: center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    justify-content: center;
    cursor: ${(props: any) => props.isDisabled ? 'default' : 'pointer' };
    transition: all .2s ease;
    &:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
` as any;

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
    padding-right: 10px;
`;

export const StarShipImageWrapper = styled.div`
    display: block;
    width: 100%;
    background: url(${(props: any) => props.bg ? props.bg : images.defaultCover.default});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-bottom: 75%;
` as any;

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
    letter-spacing: 0.7px;
    overflow: hidden;
`;

export const StarShipListWrapper = styled.div`
    &:focus, &:active {
        border: 3px solid rgba(38,143,255);
    }
`;

export const HyperDriveRatingBack = styled.div`
    width: 100%;
    background-color: ${(props: any) => props.bgColor};
    border-radius: 2px;
    overflow: hidden;
    margin-top: 4px;
` as any;

export const HyperDriveRatingProgress = styled.div`
    height: 10px;
    width: ${(props: any) => props.width}%;
    background-color: #3fb6da;
` as any;

export const SideMenuItemSpan = styled.span`
    text-decoration: ${(props: any) => props.isCurrentPage ? 'underline #3fb6da' : 'none'};
` as any;
