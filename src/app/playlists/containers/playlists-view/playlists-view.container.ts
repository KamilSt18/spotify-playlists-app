import { Component } from '@angular/core';

@Component({
  selector: 'app-playlists-view',
  templateUrl: './playlists-view.container.html',
  styleUrls: ['./playlists-view.container.scss'],
})
export class PlaylistsViewContainer {
  playlists = [
    {
      id: '123',
      name: 'Playlist 123',
      public: true,
      description: 'Awesome playlist',
    },
    {
      id: '234',
      name: 'Playlist 234',
      public: true,
      description: 'Best playlist',
    },
    {
      id: '345',
      name: 'Playlist 345',
      public: false,
      description: 'Cool playlist',
    },
  ];

  selectedId = '234';
  selected = this.playlists[1];

  selectPlaylistById(id: string) {
    this.selectedId = id
    this.selected = this.playlists.find((p) => p.id === id)!;
  }

  mode: 'details' | 'editor' = 'details';

  detailsMode() {
    this.mode = 'details';
  }

  editorMode() {
    this.mode = 'editor';
  }
}
