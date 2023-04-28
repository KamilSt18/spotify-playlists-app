import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Playlist } from '../../containers/playlists-view/Playlist';

@Component({
  selector: 'app-playlists-list',
  templateUrl: './playlists-list.component.html',
  styleUrls: ['./playlists-list.component.scss']
})
export class PlaylistsListComponent {

  @Input('items') playlists: Playlist[] = []

  @Input() selectedId = ''

  @Output() selectedIdChange = new EventEmitter<Playlist['id']>();

  select(id: Playlist['id']) {
    this.selectedIdChange.emit(id)
  }

}
