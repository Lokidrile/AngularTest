import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchString$!: Observable<string>;
  title = 'TVShows';

  setSearchString(event: string) {
    this.searchString$ = new Observable(observer => {
      observer.next(event);
    });
  }
}
