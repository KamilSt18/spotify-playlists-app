import { Component } from '@angular/core';
import { Playlist } from './Playlist';
import { MusicApiService } from 'src/app/core/services/music-api/music-api.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-playlists-view',
  templateUrl: './playlists-view.container.html',
  styleUrls: ['./playlists-view.container.scss'],
})
export class PlaylistsViewContainer {
  constructor(private service: MusicApiService) {}

  playlists?: Playlist[];

  selectedId = '';
  selected?: Playlist;
  messageSuccess = '';
  messageError = '';

  loadData() {
    this.service.fetchUserPlaylists().subscribe({
      next: (res) => (this.playlists = res.items),
      error: (err) => (this.messageError = err.message),
    });
  }

  setMessage(type: 'SUCCESS' | 'ERROR', msg: string) {
    if (type === 'SUCCESS') {
      this.messageSuccess = msg;
      setTimeout(() => {
        this.messageSuccess = '';
      }, 3000);
    } else {
      this.messageError = msg;
      setTimeout(() => {
        this.messageError = '';
      }, 3000);
    }
  }

  ngOnInit(): void {
    this.loadData();
  }

  selectPlaylistById(id: Playlist['id']) {
    this.selectedId = id;
    this.selected = this.playlists?.find((p) => p.id === id);
    console.log('this.selected', this.selected);
    console.log('this.selectedId', this.selectedId);
  }

  selectPlaylist(draft: Playlist) {
    this.selectedId = draft.id;
    this.selected = draft;
  }

  mode: 'details' | 'editor' = 'details';

  detailsMode() {
    this.mode = 'details';
  }

  editorMode() {
    this.mode = 'editor';
  }

  savePlaylist(draft: Playlist) {
    this.service.changePlaylistDetails(draft).subscribe({
      next: () => {
        this.setMessage('SUCCESS', 'The playlist was updated.');
        this.loadData();
        this.selectPlaylist(draft);
      },
      error: (err) => this.setMessage('ERROR', err.message),
    });

    this.selectPlaylistById(draft.id);
    this.mode = 'details';
  }
}
