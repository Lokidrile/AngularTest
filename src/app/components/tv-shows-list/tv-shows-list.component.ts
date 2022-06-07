import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalTvShow, TvShow } from 'src/shared/models/tv-shows.model';
import { TvShowsService } from 'src/shared/services/tv-shows.service';
import { HelperTvshowsService } from 'src/shared/services/helper-tvshows.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ShowDetailModalComponent } from '../show-detail-modal/show-detail-modal.component';
import { Store } from '@ngrx/store';
import { FavouriteShows } from 'src/app/state/tv.shows.effect';

@Component({
  selector: 'app-tv-shows-list',
  templateUrl: './tv-shows-list.component.html',
  styleUrls: ['./tv-shows-list.component.scss']
})
export class TvShowsListComponent implements OnInit, OnDestroy {

  tvShows!: TvShow[];
  tvShowsCopy!: TvShow[];

  public constructor(
    private readonly tvShowsService: TvShowsService,
    private readonly helperTvshowsService: HelperTvshowsService,
    private readonly modalService: NgbModal,
    private readonly favouriteShows: FavouriteShows
    ) { }

  public ngOnInit(): void {
    
    this.favouriteShows.saveFavourites$.subscribe(result => {
      if (result) {
        this.tvShows = [result];
      } else {
        this.initializeTableAndFilter();
      }
    })

  }

  public initializeTableAndFilter() {
    this.tvShowsService.getTVShows(1).subscribe(tvShows => {
      this.tvShows = tvShows;
      this.tvShowsCopy = tvShows
    });
    this.helperTvshowsService.searchString$.subscribe(value => {
      this.searchOnList(value);
    });
  }

  public searchOnList(str: string) {
    this.tvShows = this.tvShowsCopy;
    this.tvShows = this.tvShows.filter(show => { return show.name.toLocaleLowerCase().includes(str.toLocaleLowerCase()) })
  }

  public async openModal(tvshow: TvShow) {
    const modalData: ModalTvShow = {
      title: tvshow.name,
      poster: tvshow.image.original,
      summary: tvshow.summary,
      imbdLink: tvshow.externals.imdb,
      genres: tvshow.genres,
      isFavourite: tvshow.isFavourite,
      id: tvshow.id
    }
    const modalRef = this.modalService.open(ShowDetailModalComponent, { windowClass: 'dark-modal', size: 'xl', centered: true });
    modalRef.componentInstance.modalData = modalData;
    const result = await modalRef.result;
    if (result) {
      this.tvShows.forEach(x => {
        if (x.id === result.id) {
          x.isFavourite = result.isFavourite;
        }
      })
    }
  }

  public ngOnDestroy(): void {
    this.helperTvshowsService.searchString$.unsubscribe();
  }

}
