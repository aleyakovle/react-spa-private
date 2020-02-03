import React from 'react';
import { Button } from 'react-bootstrap';
import { compose } from 'redux';
import { FullHeightWrapper } from 'HOCs/full-height-wrapper';
import { PageControlWrapper } from 'components/styled-components-custom';

interface IPageControl {
    isActive: boolean;
    isDisabled: boolean;
    onClick: () => void;
    title: string;
}

const PageControlComposed: React.FC<IPageControl> = (props) => {
    const { isActive, isDisabled, onClick, title } = props;
    return (
        <PageControlWrapper>
            <Button active={isActive} disabled={isDisabled} onClick={onClick}>
                {title}
            </Button>
        </PageControlWrapper>
    );
};

export const PageControl = compose(FullHeightWrapper)(PageControlComposed) as React.ComponentType<any>;
