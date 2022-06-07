import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { ActionTypes } from '../models/favourites-state.model';
import { TvShow } from '../models/tv-shows.model';

@Injectable({
  providedIn: 'root'
})
export class HelperTvshowsService {
  searchString$: Subject<string> =  new Subject<string>();
  constructor(private readonly store: Store<TvShow[]>) { }

  setSearchString(value: string): void {
    this.searchString$.next(value);
  }

  saveFavourites(tvShows: TvShow[]): TvShow[] {
    return tvShows.filter(shows => shows.isFavourite === true);
  }

}
