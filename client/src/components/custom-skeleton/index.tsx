import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';
import { Col, Row } from 'react-bootstrap';
import { StarShipInfoWrapper, StarShipMainWrapper } from 'components/styled-components-custom';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});

export const CustomSkeletonTextLine: React.FC<any> = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Skeleton />
        </div>
    );
};

export const CustomSkeletonImage: React.FC<any> = () => {
    return <Skeleton variant="rect" width={'100%'} height={'100%'} />;
};

export const CustomSkeletonStarshipInfo: React.FC<any> = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Skeleton />
            <Skeleton animation={false} />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
        </div>
    );
};

export const CustomSkeletonStarship: React.FC<any> = () => {
    return (
        <StarShipMainWrapper>
            <Row>
                <Col xs={12} sm={4}>
                    {<CustomSkeletonImage />}
                </Col>
                <Col xs={12} sm={8}>
                    <StarShipInfoWrapper>
                        <CustomSkeletonStarshipInfo />
                    </StarShipInfoWrapper>
                </Col>
            </Row>
        </StarShipMainWrapper>
    );
};

export const TenSkeletons: React.FC<any> = () => {
    return (
        <>
            <CustomSkeletonStarship />
            <CustomSkeletonStarship />
            <CustomSkeletonStarship />
            <CustomSkeletonStarship />
            <CustomSkeletonStarship />
            <CustomSkeletonStarship />
            <CustomSkeletonStarship />
            <CustomSkeletonStarship />
            <CustomSkeletonStarship />
            <CustomSkeletonStarship />
        </>
    );
};
