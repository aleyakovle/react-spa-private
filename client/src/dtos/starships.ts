export interface IGetStarshipsSuccessResponse {
    count: number,
    next: string | null,
    previous: string | null,
    results: IStarship[]
}

export interface IStarship {
    [k: string]: any
    // name: string,
    // model: string,
    // manufacturer: string,
    // cost_in_credits: string,
    // length: string,
    // max_atmosphering_speed: string,
    // crew: number | string,
    // passengers: string,
    // cargo_capacity: string,
    // consumables: string,
    // hyperdrive_rating: string,
    // MGLT: string,
    // starship_class: string,
    // pilots: string[],
    // films: string[],
    // created: string,
    // edited: string,
    // url: string,
}
