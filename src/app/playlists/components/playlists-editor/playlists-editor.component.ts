import { Component } from '@angular/core';

@Component({
  selector: 'app-playlists-editor',
  templateUrl: './playlists-editor.component.html',
  styleUrls: ['./playlists-editor.component.scss']
})
export class PlaylistsEditorComponent {
  playlist = {
    id: '123',
    name: 'Playlist ABC',
    public: true,
    description: 'Awesome playlist',
  };
}
