import { Component, EventEmitter, Output } from '@angular/core';
import { HelperTvshowsService } from 'src/shared/services/helper-tvshows.service';

@Component({
  selector: 'app-filter-shows',
  templateUrl: './filter-shows.component.html',
  styleUrls: ['./filter-shows.component.scss']
})
export class FilterShowsComponent {

  public searchString = '';
  
  constructor(private helperTvshowsService: HelperTvshowsService) {}

  public onSearchingTitles(): void {
    this.helperTvshowsService.setSearchString(this.searchString);
  }
}
