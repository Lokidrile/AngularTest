import { createReducer, on } from "@ngrx/store";
import { addFavourites } from "./tv-shows.actions";
import { initialState } from "./tv-shows.state";

const _tvShowsReducer = createReducer(
  initialState, on(addFavourites, (state, action) => {
    return {
      ...state,
      tvShows: action.tvShows
    }
  })
);

export function TVShowsReducer(state, action) {
  return _tvShowsReducer(state, action);
}
