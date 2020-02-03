import React from 'react';
import { IStarship } from 'dtos/starships';
import { StarShipsListItem } from 'components/starship-list-item';

interface IStarShipsList {
    starships: IStarship[];
}

export const StarShipsListComponent: React.FC<IStarShipsList> = (props) => {
    const { starships } = props;
    return (
        <div>
            {starships.map((item: IStarship) => (
                <StarShipsListItem
                    crew={item.crew}
                    passengers={item.passengers}
                    starshipName={item.name}
                    hyperdrive_rating={item.hyperdrive_rating}
                />
            ))}
        </div>
    );
};

export const StarShipsList = StarShipsListComponent;
