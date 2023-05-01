import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Album } from '../../model/AlbumSearchResponse';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent {
  @Output() searchClickChange = new EventEmitter<Album['name']>();

  @Input() query: Album['name'] = '';

  searchClickHandler() {
    this.searchClickChange.emit(this.query);
  }
}
