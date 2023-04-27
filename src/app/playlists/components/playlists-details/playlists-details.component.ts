import { Component } from '@angular/core';

@Component({
  selector: 'app-playlists-details',
  templateUrl: './playlists-details.component.html',
  styleUrls: ['./playlists-details.component.scss'],
})
export class PlaylistsDetailsComponent {
  playlist = {
    id: '123',
    name: 'Playlist ABC',
    public: true,
    description: 'Awesome playlist',
  };
}
