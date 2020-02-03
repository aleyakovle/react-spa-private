import React, { useLayoutEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import {
    StarShipImageWrapper,
    StarShipInfoSpan,
    StarShipInfoWrapper,
    StarShipMainWrapper
} from 'components/styled-components-custom';
// import {buildImgUrl} from "utils/common";

interface IStarShipsListItem {
    starshipName: string;
    passengers: string;
    crew: string;
    hyperdrive_rating: string;
    model: string;
}

export const StarShipsListItemElement: React.FC<IStarShipsListItem> = (props) => {
    const { starshipName, passengers, hyperdrive_rating, crew,
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

    // src={imageURL} alt=""

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
                        <StarShipInfoSpan>Hyperdrive_rating: {hyperdrive_rating} </StarShipInfoSpan>
                    </StarShipInfoWrapper>
                </Col>
            </Row>
        </StarShipMainWrapper>
    );
};

export const StarShipsListItem = StarShipsListItemElement;

// https://cse.google.com/cse/create/congrats?cx=000712022248097102088%3Aacm5o5queoa
// AIzaSyCIIUVdRgtfRM0OdgyW91lmwXZbU7pBZDo
