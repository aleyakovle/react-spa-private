import React from 'react';
import {Col, Row} from "react-bootstrap";

interface IStarShipsListItem {
    starshipName: string,
    passengers: string,
    crew: string,
    hyperdrive_rating: string,
}

export const StarShipsListItemElement: React.FC<IStarShipsListItem> = (props) => {
    const { starshipName, passengers, hyperdrive_rating, crew } = props;
    return (
        <Row>
            <Col xs={4}>
                <Row />
            </Col>
            <Col xs={8}>
                <div
                    key={starshipName}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: 'green',
                        width: '100%',
                        border: '1px solid black',
                    }}
                >
                    <p>Name: {starshipName} </p>
                    <p>Passengers: {passengers} </p>
                    <p>Crew: {crew} </p>
                    <p>Hyperdrive_rating: {hyperdrive_rating} </p>
                </div>
            </Col>
        </Row>

    );
};

export const StarShipsListItem = StarShipsListItemElement;
