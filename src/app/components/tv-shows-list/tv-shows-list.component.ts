import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TvShow } from 'src/shared/models/tv-shows.model';
import { TvShowsService } from 'src/shared/services/tv-shows.service';
import { HelperTvshowsService } from 'src/shared/services/helper-tvshows.service';

@Component({
  selector: 'app-tv-shows-list',
  templateUrl: './tv-shows-list.component.html',
  styleUrls: ['./tv-shows-list.component.scss']
})
export class TvShowsListComponent implements OnInit {

  tvShows!: TvShow[];
  tvShowsCopy!: TvShow[];

  public constructor(
    private readonly tvShowsService: TvShowsService,
    private readonly helperTvshowsService: HelperTvshowsService
    ) { }

  public ngOnInit(): void {
    this.tvShowsService.getTVShows(1).subscribe(tvShows => {
      this.tvShows = tvShows;
      this.tvShowsCopy = tvShows
    });
    this.helperTvshowsService.searchString$.subscribe(value => {
      this.searchOnList(value);
    })
  }

  public searchOnList(str: string) {
    this.tvShows = this.tvShowsCopy;
    this.tvShows = this.tvShows.filter(show => { return show.name.toLocaleLowerCase().includes(str.toLocaleLowerCase()) })
  }

}
