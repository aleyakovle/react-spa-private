import {IStarship} from "dtos/starships";
import {get} from "lodash";

export const makePageResponseValid = (response: any) => {
    console.log(response);
    const starships = get(response, "data.result", []);
    return starships.map(transformSingleStarship);
};

const transformSingleStarship = (starship: IStarship) => {
    if (starship.hasOwnProperty("name")) {
        starship.name = String(starship[name]).replace(/^\w/, c => c.toUpperCase());
    }

    starship = transformZeroAndStringValues(starship, "crew");
    starship = transformZeroAndStringValues(starship, "passengers");
    starship = transformHyperDrive(starship);

    return starship;
};


const transformZeroAndStringValues = (obj: IStarship, key: any) => {
    if (obj.hasOwnProperty(key) && typeof obj[key] === "number" ) {
        obj[key] = obj[key] === 0 ? "None" : obj[key];
    } else if ((obj.hasOwnProperty(key) && isNaN(obj[key] as any)) || !obj.hasOwnProperty(key)) {
        obj[key] = "None";
    } else if (obj.hasOwnProperty(key) && !isNaN(obj[key] as any) ) {
        obj[key] = obj[key] === 0 ? "None" : Number(obj[key]);
    }

    return obj;
};

const transformHyperDrive = (obj: IStarship) => {
    return obj;
};
