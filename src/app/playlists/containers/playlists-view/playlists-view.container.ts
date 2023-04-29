import { Component } from '@angular/core';
import { Playlist } from './Playlist';

const mockPlaylists = [
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

@Component({
  selector: 'app-playlists-view',
  templateUrl: './playlists-view.container.html',
  styleUrls: ['./playlists-view.container.scss'],
})
export class PlaylistsViewContainer {
  playlists: Playlist[] = mockPlaylists;

  selectedId = '';
  selected?: Playlist;

  selectPlaylistById(id: Playlist['id']) {
    this.selectedId = id;
    this.selected = this.playlists.find((p) => p.id === id);
  }

  mode: 'details' | 'editor' = 'details';

  detailsMode() {
    this.mode = 'details';
  }

  editorMode() {
    this.mode = 'editor';
  }

  savePlaylist(draft: Playlist) {
    const index = this.playlists.findIndex(playlist => playlist.id === draft.id)
    this.playlists[index] = draft
    this.selectPlaylistById(draft.id)
    this.mode = 'details';
  }
  
}
