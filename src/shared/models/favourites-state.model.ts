import { TvShow } from "./tv-shows.model";

export enum ActionTypes {
    saveFavourites = 'SAVE_FAVOURITES'
}

export interface StateAction {
    type: string;
    payload: TvShow[];
}