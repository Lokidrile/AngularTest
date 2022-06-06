import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SHOWS, TVMAZE_URL_BASE } from '../constants/url.constants';
import { Observable } from 'rxjs';
import { TvShow } from '../models/tv-shows.model';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {

  public constructor(private readonly http: HttpClient) { }

  public getTVShows(page: number): Observable<any> {
    return this.http.get<TvShow[]>(`${TVMAZE_URL_BASE}${SHOWS}${page}`);
  }
}