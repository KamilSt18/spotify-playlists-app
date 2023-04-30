import { Inject, Injectable } from '@angular/core';
import { API_URL } from '../../API_URL';

import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { AlbumSearchResponse } from 'src/app/music/model/Album';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MusicApiService {
  constructor(
    private http: HttpClient,
    private auth: AuthService,
    @Inject(API_URL) private api_url: string
  ) {}

  fetchAlbumSearchResults(query: string) {

    return this.http.get<AlbumSearchResponse>(this.api_url + 'search', {
      headers: {
        Authorization: 'Bearer ' + this.auth.getToken()
      },
      params: {
        type: 'album',
        q: query,
      },
    })
    .pipe(
      map(res => res.albums.items),
      catchError(err => {
        return throwError(() => new Error(err.error.error.message))
      })
    )

  }
}
