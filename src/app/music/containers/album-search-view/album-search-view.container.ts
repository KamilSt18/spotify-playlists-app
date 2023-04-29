import { Component, Inject } from '@angular/core';
import { MusicApiService } from 'src/app/core/services/music-api/music-api.service';
import { Album } from '../../model/Album';

@Component({
  selector: 'app-album-search-view',
  templateUrl: './album-search-view.container.html',
  styleUrls: ['./album-search-view.container.scss'],
})
export class AlbumSearchViewContainer {
  constructor(@Inject(MusicApiService) private service: MusicApiService) {}

  results: Album[] = [];

  // ngOnInit(): void {
  //  this.search('test')
  // }

  search(query: string) {
    this.results = this.service.fetchAlbumSearchResults(query)
  }
}
