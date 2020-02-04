import React, { useMemo } from 'react';
import { compose } from 'redux';
import { FullHeightWrapper } from 'HOCs/full-height-wrapper';
import { PageControlItem } from 'components/styled-components-custom';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';

interface IPageControl {
    isDisabled: boolean;
    onClick: () => void;
    direction: 'next' | 'prev';
    title: string;
}

const PageControlComposed: React.FC<IPageControl> = (props) => {
    const { onClick, isDisabled, direction } = props;
    const arrowOpacity = isDisabled ? 0.3 : 1;

    const renderArrow = useMemo(() => {
        return direction === 'next' ? (
            <ArrowForwardIos width={24} height={24} opacity={arrowOpacity} />
        ) : (
            <ArrowBackIos style={{ marginLeft: 6, marginRight: -6 }} width={24} height={24} opacity={arrowOpacity} />
        );
    }, [direction, isDisabled]);

    return (
        <PageControlItem isDisabled={isDisabled} onClick={onClick}>
            {renderArrow}
        </PageControlItem>
    );
};

export const PageControl = compose(FullHeightWrapper)(PageControlComposed) as React.ComponentType<any>;
