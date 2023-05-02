import { NgModule } from '@angular/core';

import { PlaylistsRoutingModule } from './playlists-routing.module';
import { PlaylistsViewContainer } from './containers/playlists-view/playlists-view.container';
import { PlaylistsListComponent } from './components/playlists-list/playlists-list.component';
import { PlaylistsDetailsComponent } from './components/playlists-details/playlists-details.component';
import { PlaylistsEditorComponent } from './components/playlists-editor/playlists-editor.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PlaylistsViewContainer,
    PlaylistsListComponent,
    PlaylistsDetailsComponent,
    PlaylistsEditorComponent,
  ],
  imports: [SharedModule, PlaylistsRoutingModule],
  exports: [
    // PlaylistsViewContainer
  ],
})
export class PlaylistsModule {}
