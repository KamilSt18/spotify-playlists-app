import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-playlists-list',
  templateUrl: './playlists-list.component.html',
  styleUrls: ['./playlists-list.component.scss']
})
export class PlaylistsListComponent {

  @Input('items') playlists = [{
    id: '',
    name: ' ',
    public: false,
    description: '',
  },
  ]

  @Input() selectedId = ''

  @Output() selectedIdChange = new EventEmitter<string>();

  select(id: string) {
    this.selectedIdChange.emit(id)
  }

}
