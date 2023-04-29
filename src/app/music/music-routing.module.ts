import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumSearchViewContainer } from './containers/album-search-view/album-search-view.container';
import { AlbumDetailsViewContainer } from './containers/album-details-view/album-details-view.container';

const routes: Routes = [
  {
    path: 'music',
    children: [
      {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full',
      },
      {
        path: 'search',
        component: AlbumSearchViewContainer,
      },
      {
        path: 'albums/:albumId',
        component: AlbumDetailsViewContainer,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicRoutingModule {}
