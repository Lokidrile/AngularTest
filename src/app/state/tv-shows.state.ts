import { TvShow } from "src/shared/models/tv-shows.model";
import { TvShowsListComponent } from "../components/tv-shows-list/tv-shows-list.component";

export interface TvShowState {
    tvShows: TvShow[];
}

export const initialState: TvShowState = {
    tvShows: []
}