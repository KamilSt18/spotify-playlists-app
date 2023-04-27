import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-playlists-details',
  templateUrl: './playlists-details.component.html',
  styleUrls: ['./playlists-details.component.scss'],
})
export class PlaylistsDetailsComponent {
  @Input() playlist = {
    id: '',
    name: '',
    public: false,
    description: '',
  };
}
