import React, { useLayoutEffect, useMemo, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import {
    StarShipImageWrapper,
    StarShipInfoSpan,
    StarShipInfoWrapper,
    StarShipMainWrapper,
} from 'components/styled-components-custom';
import { HyperDriveProgressBar } from 'components/hyperdive-progress-bar';
import { buildImgUrl, getPercentsHyperDrive } from 'utils/common';
import { CircularProgress } from '@material-ui/core';

interface IStarShipsListItem {
    starshipName: string;
    passengers: string;
    crew: string;
    hyperdriveRating: string;
    model: string;
}

export const StarShipsListItem: React.FC<IStarShipsListItem> = (props) => {
    const { starshipName, passengers, hyperdriveRating, crew, model } = props;
    const imgURL = buildImgUrl(model, starshipName);

    const [imageURL, setImageURL] = useState(undefined as undefined | string);
    useLayoutEffect(() => {
        axios
            .get(imgURL)
            .then((e) => {
                setImageURL(e.data.items[0].link);
            })
            .catch(() => {
                setImageURL('');
            });
    });

    const renderImage = useMemo(() => {
        return typeof imageURL !== 'undefined' ? <StarShipImageWrapper bg={imageURL} /> : <CircularProgress />;
    }, [imageURL]);

    const percentsHyperDrive = useMemo(() => getPercentsHyperDrive(hyperdriveRating), [hyperdriveRating]);

    return (
        <StarShipMainWrapper>
            <Row>
                <Col xs={12} sm={6} md={4}>
                    {renderImage}
                </Col>
                <Col xs={12} sm={6} md={8}>
                    <StarShipInfoWrapper>
                        <StarShipInfoSpan>Name: {starshipName} </StarShipInfoSpan>
                        <StarShipInfoSpan>Passengers: {passengers} </StarShipInfoSpan>
                        <StarShipInfoSpan>Crew: {crew} </StarShipInfoSpan>
                        <HyperDriveProgressBar percents={percentsHyperDrive} />
                    </StarShipInfoWrapper>
                </Col>
            </Row>
        </StarShipMainWrapper>
    );
};
