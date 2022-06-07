import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterShowsComponent } from './components/filter-shows/filter-shows.component';
import { TvShowsListComponent } from './components/tv-shows-list/tv-shows-list.component';
import { ShowDetailModalComponent } from './components/show-detail-modal/show-detail-modal.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    FilterShowsComponent,
    TvShowsListComponent,
    ShowDetailModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    EffectsModule,
    StoreModule.forRoot({}),
  ],
  providers: [NgbModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
