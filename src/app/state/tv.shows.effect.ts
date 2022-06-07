import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { HelperTvshowsService } from "src/shared/services/helper-tvshows.service";
import { addFavourites } from "./tv-shows.actions";
import { exhaustMap } from "rxjs/operators"

@Injectable()
export class FavouriteShows{
    public constructor (private actions$: Actions, private helperTvshowsService: HelperTvshowsService) {}

    saveFavourites$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(addFavourites),
            exhaustMap(action => {
                return this.helperTvshowsService.saveFavourites(action.tvShows);
            })
        )
    })
}

