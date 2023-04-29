import { Injectable } from '@angular/core';
import { mockAlbums } from './mockAlbums';

@Injectable({
  providedIn: 'root',
})
export class MusicApiService {
  fetchAlbumSearchResults(query: string) {
    console.log(query);
    return mockAlbums;
  }

  constructor() {}
}
