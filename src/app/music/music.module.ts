import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { AlbumDetailsViewContainer } from './containers/album-details-view/album-details-view.container';
import { AlbumSearchViewContainer } from './containers/album-search-view/album-search-view.container';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { ResultsGridComponent } from './components/results-grid/results-grid.component';
import { AlbumCardComponent } from './components/album-card/album-card.component';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AlbumDetailsViewContainer,
    AlbumSearchViewContainer,
    SearchFormComponent,
    ResultsGridComponent,
    AlbumCardComponent
  ],
  imports: [
    SharedModule,
    MusicRoutingModule,
  ]
})
export class MusicModule { }
