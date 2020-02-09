import React, { useMemo } from 'react';
import { IStarship } from 'dtos/starships';
import { StarShipsListItem } from 'components/starship-list-item';
import { useSelector } from 'react-redux';
import { makeGetStarshipsRequestState } from 'ducks/fetching/selectors';
import { TenSkeletons } from 'components/custom-skeleton';
import { StarShipListWrapper } from 'components/styled-components-custom';

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
                      hyperdriveRating={item.hyperdriveRating}
                  />
              ));

    return <StarShipListWrapper tabIndex={0}>{renderStarships()}</StarShipListWrapper>;
};

export const StarShipsList = StarShipsListComponent;
