import { Component, Input } from '@angular/core';
import { Album } from '../../model/AlbumSearchResponse';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss'],
})
export class AlbumCardComponent {
  @Input() result?: Album;
}
