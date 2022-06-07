import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "src/shared/models/favourites-state.model";
import { TvShow } from "src/shared/models/tv-shows.model";

export const addFavourites = createAction(ActionTypes.saveFavourites, props<{ tvShows: TvShow[]}>());