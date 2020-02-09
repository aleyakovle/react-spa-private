import { IStarship } from 'dtos/starships';
import { get } from 'lodash';

export const makePageResponseValid = (data: any) => {
    const starships = get(data, 'results', []);
    const starshipsTransformed = starships.map(transformSingleStarship);
    if (starships.length) {
        data.results = starshipsTransformed;
    }

    return data;
};

const transformSingleStarship = (starship: IStarship) => {
    if (starship.hasOwnProperty('name')) {
        starship.name = String(starship.name).replace(/^\w/, (c) => c.toUpperCase());
    }

    starship = transformZeroAndStringValues(starship, 'crew');
    starship = transformZeroAndStringValues(starship, 'passengers');
    starship = transformHyperDrive(starship);

    return starship;
};

const transformZeroAndStringValues = (obj: IStarship, key: any) => {
    if (obj.hasOwnProperty(key) && typeof obj[key] === 'number') {
        obj[key] = obj[key] === 0 ? 'None' : obj[key];
    } else if ((obj.hasOwnProperty(key) && isNaN(obj[key] as any)) || !obj.hasOwnProperty(key)) {
        obj[key] = 'None';
    } else if (obj.hasOwnProperty(key) && !isNaN(obj[key] as any)) {
        obj[key] = obj[key] === '0' ? 'None' : Number(obj[key]);
    }

    return obj;
};

const transformHyperDrive = (obj: IStarship) => {
    if (
        obj.hasOwnProperty('hyperdrive_rating') &&
        typeof obj.hyperdrive_rating === 'string' &&
        !isNaN(Number(obj.hyperdrive_rating))
    ) {
        obj.hyperdrive_rating = Math.floor(parseFloat(obj.hyperdrive_rating));
        if (obj.hyperdrive_rating > 6) {
            obj.hyperdrive_rating = 6;
        } else if (obj.hyperdrive_rating < 0) {
            obj.hyperdrive_rating = 0;
        }
    } else {
        obj.hyperdrive_rating = 'unknown';
    }

    obj.hyperdriveRating = obj.hyperdrive_rating;
    delete obj.hyperdrive_rating;

    return obj;
};
