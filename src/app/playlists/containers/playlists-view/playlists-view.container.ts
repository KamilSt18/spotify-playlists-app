import { Component } from '@angular/core';

@Component({
  selector: 'app-playlists-view',
  templateUrl: './playlists-view.container.html',
  styleUrls: ['./playlists-view.container.scss'],
})
export class PlaylistsViewContainer {
  mode: 'details' | 'editor' = 'details';

  detailsMode() {
    this.mode = 'details';
  }

  editorMode() {
    this.mode = 'editor';
  }
}
