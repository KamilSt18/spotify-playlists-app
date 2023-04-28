import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Playlist } from '../../containers/playlists-view/Playlist';

@Component({
  selector: 'app-playlists-details',
  templateUrl: './playlists-details.component.html',
  styleUrls: ['./playlists-details.component.scss'],
})
export class PlaylistsDetailsComponent {
  @Input() playlist?: Playlist;

  @Output() editClickChange = new EventEmitter();

  editClickHandler() {
    this.editClickChange.emit()
  }
}
