import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Playlist } from '../../containers/playlists-view/Playlist';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-playlists-editor',
  templateUrl: './playlists-editor.component.html',
  styleUrls: ['./playlists-editor.component.scss'],
})
export class PlaylistsEditorComponent {
  @Input() playlist?: Playlist;

  @Output() cancelClickChange = new EventEmitter();
  @Output() saveClickChange = new EventEmitter<Playlist>();

  cancelClickHandler() {
    this.cancelClickChange.emit();
  }

  saveClickHandler(formRef: NgForm) {
    const draft: Playlist = {
      ...this.playlist,
      ...formRef.value
    }
    this.saveClickChange.emit(draft);
  }
}
