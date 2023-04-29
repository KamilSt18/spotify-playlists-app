import { Component, EventEmitter, Output } from '@angular/core';
import { Album } from '../../model/Album';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {
  @Output() searchClickChange = new EventEmitter<Album['name']>();

  query: Album['name'] = ''

  searchClickHandler() {
    this.searchClickChange.emit(this.query)
  }
}
