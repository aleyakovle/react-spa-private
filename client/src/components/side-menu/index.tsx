import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { makeGetAllPageLinks } from 'ducks/starships/selectors';
import { SideMenuItem } from 'components/side-menu-item';
import { SideMenuList } from 'components/styled-components-custom';

export const SideMenuContainer: React.FC<any> = () => {
    const pageLinks = useSelector(makeGetAllPageLinks());

    const renderLinks = useMemo(
        () => pageLinks.map((item, index) => <SideMenuItem key={item} url={item} index={index} />),
        [pageLinks.length],
    );

    return <SideMenuList>{renderLinks}</SideMenuList>;
};
