import React from 'react';
import { compose } from 'redux';
import { withPageNameHOC } from 'HOCs/with-page-name';
import { useSelector } from 'react-redux';
import { makeGetAllPageLinks } from 'ducks/starships/selectors';
import { SideMenuItem } from 'components/side-menu-item';

export const SideMenuContainerComposed: React.FC<any> = () => {
    const pageLinks = useSelector(makeGetAllPageLinks());

    return (
        <ul>
            {pageLinks.map((item) => (
                <SideMenuItem url={item} />
            ))}
        </ul>
    );
};

export const SideMenuContainer = compose(withPageNameHOC)(SideMenuContainerComposed) as React.ComponentType<any>;
