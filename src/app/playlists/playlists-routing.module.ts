import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistsViewContainer } from './containers/playlists-view/playlists-view.container';

const routes: Routes = [
  {
    path: 'playlists',
    component: PlaylistsViewContainer,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaylistsRoutingModule {}
