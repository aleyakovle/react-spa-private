import React, { useMemo } from 'react';
import { IStarship } from 'dtos/starships';
import { StarShipsListItem } from 'components/starship-list-item';
import { useSelector } from 'react-redux';
import { makeGetStarshipsRequestState } from 'ducks/fetching/selectors';
import { TenSkeletons } from 'components/custom-skeleton';

interface IStarShipsList {
    starships: IStarship[];
}

export const StarShipsListComponent: React.FC<IStarShipsList> = (props) => {
    const { starships } = props;
    const { isFetching } = useSelector(makeGetStarshipsRequestState());

    const renderSkeletons = useMemo(() => <TenSkeletons />, [isFetching]);

    const renderStarships = () =>
        isFetching
            ? renderSkeletons
            : starships.map((item: IStarship) => (
                  <StarShipsListItem
                      key={item.model + item.name}
                      crew={item.crew}
                      model={item.model}
                      passengers={item.passengers}
                      starshipName={item.name}
                      hyperdrive_rating={item.hyperdrive_rating}
                  />
              ));

    return <div>{renderStarships()}</div>;
};

export const StarShipsList = StarShipsListComponent;
