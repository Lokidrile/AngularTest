import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperTvshowsService {
  searchString$: Subject<string> =  new Subject<string>();
  constructor() { }

  setSearchString(value: string): void {
    this.searchString$.next(value);
  }

}
