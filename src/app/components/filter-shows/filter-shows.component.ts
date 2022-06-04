import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-shows',
  templateUrl: './filter-shows.component.html',
  styleUrls: ['./filter-shows.component.scss']
})
export class FilterShowsComponent {

  public searchString = '';
  
  @Output()
  isSearching: EventEmitter<string> = new EventEmitter<string>();

  public onSearchingTitles(): void {
    this.isSearching.emit(this.searchString);
  }



}
