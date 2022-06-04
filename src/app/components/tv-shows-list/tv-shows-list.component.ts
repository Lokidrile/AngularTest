import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TvShow } from 'src/shared/models/tv-shows.model';
import { TvShowsService } from 'src/shared/services/tv-shows.service';

@Component({
  selector: 'app-tv-shows-list',
  templateUrl: './tv-shows-list.component.html',
  styleUrls: ['./tv-shows-list.component.scss']
})
export class TvShowsListComponent implements OnInit {

  @Input()
  searchString$!: Observable<string>;

  tvShows!: TvShow[];

  public constructor(private readonly tvShowsService: TvShowsService) { }

  public ngOnInit(): void {
    this.tvShowsService.getTVShows(1).subscribe(tvShows => this.tvShows = tvShows);
    this.searchString$.subscribe(searchString => {
      this.searchOnList(searchString);
    })
  }

  public searchOnList(str: string) {
    this.tvShows = this.tvShows.filter(show => { return show.name === str })
  }

}
