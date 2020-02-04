import React, {useLayoutEffect, useMemo, useState} from 'react';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import {
    StarShipImageWrapper,
    StarShipInfoSpan,
    StarShipInfoWrapper,
    StarShipMainWrapper
} from 'components/styled-components-custom';
import {HyperDriveProgressBar} from "components/hyperdive-progress-bar";
import {getPercentsHyperDrive} from "utils/common";
// import {buildImgUrl} from "utils/common";

interface IStarShipsListItem {
    starshipName: string;
    passengers: string;
    crew: string;
    hyperdriveRating: string;
    model: string;
}

export const StarShipsListItem: React.FC<IStarShipsListItem> = (props) => {
    const { starshipName, passengers, hyperdriveRating, crew,
        // model
    } = props;
    // const imgURL = buildImgUrl(model, starshipName);

    const [imageURL, setImageURL] = useState(undefined);

    useLayoutEffect(() => {
        axios
            // .get(imgURL)
            .get('http://')
            .then((e) => {
                setImageURL(e.data.items[0].link);
            })
            .catch(() => {
                setImageURL(undefined);
            });
    });

    const renderImage = () => {
        console.log(imageURL);
        // return imageURL ? <StarShipImageWrapper  /> : <span>image not available</span>;
        return null;
    };

    const percentsHyperDrive = useMemo(() => getPercentsHyperDrive(hyperdriveRating), [hyperdriveRating]);

    return (
        <StarShipMainWrapper>
            <Row>
                <div style={{ display: "none" }}>
                    <Col xs={12} sm={4}>{renderImage()}</Col>
                </div>

                <Col xs={12} sm={6} md={4}><StarShipImageWrapper  /></Col>
                <Col xs={12} sm={6} md={8}>
                    <StarShipInfoWrapper>
                        <StarShipInfoSpan>Name: {starshipName} </StarShipInfoSpan>
                        <StarShipInfoSpan>Passengers: {passengers} </StarShipInfoSpan>
                        <StarShipInfoSpan>Crew: {crew} </StarShipInfoSpan>
                        <HyperDriveProgressBar percents={percentsHyperDrive}/>
                    </StarShipInfoWrapper>
                </Col>
            </Row>
        </StarShipMainWrapper>
    );
};
