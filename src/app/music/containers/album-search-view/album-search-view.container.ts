import { Component, Inject } from '@angular/core';
import { MusicApiService } from 'src/app/core/services/music-api/music-api.service';
import { Album, AlbumSearchResponse } from '../../model/Album';

@Component({
  selector: 'app-album-search-view',
  templateUrl: './album-search-view.container.html',
  styleUrls: ['./album-search-view.container.scss'],
})
export class AlbumSearchViewContainer {
  constructor(@Inject(MusicApiService) private service: MusicApiService) {}

  results: Album[] = [];
  message = '';

  search(query: string) {
    this.message = ''

    this.service.fetchAlbumSearchResults(query)
    .subscribe({
      next: (albums) => {
        this.results = albums
      },
      error: (err) => {
        this.message = err.message
      },
    });
  }
}
