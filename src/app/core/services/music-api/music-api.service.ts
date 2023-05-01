import { Inject, Injectable } from '@angular/core';
import { API_URL } from '../../API_URL';

import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { AlbumSearchResponse } from 'src/app/music/model/AlbumSearchResponse';
import { catchError, map, pipe, throwError } from 'rxjs';
import { UserResponse } from 'src/app/shared/models/UserResponse';
import {
  AlbumDetailsResponse,
  Artist,
} from 'src/app/music/model/AlbumDetailsResponse';
import { CustomError } from './CustomError';

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
    return this.http
      .get<AlbumSearchResponse>(this.api_url + 'search', {
        headers: {
          Authorization: 'Bearer ' + this.auth.getToken(),
        },
        params: {
          type: 'album',
          q: query,
        },
      })
      .pipe(
        map((res) => res.albums.items),
        catchError((err) => {
          return throwError(() => new Error(err.error.error.message));
        })
      );
  }

  fetchUserProfile() {
    return this.http
      .get<UserResponse>(this.api_url + 'me', {
        headers: {
          Authorization: 'Bearer ' + this.auth.getToken(),
        },
      })
      .pipe(
        catchError((err) => {
          return throwError(() => (Error(err.error.error.message)));
        })
      );
  }

  fetchAlbumDetails(id: string) {
    return this.http
      .get<AlbumDetailsResponse>(this.api_url + `albums/${id}`, {
        headers: {
          Authorization: 'Bearer ' + this.auth.getToken(),
        },
      })
      .pipe(
        map((res) => {
          const artistsRes = res.artists;
          res.artists = artistsRes.map((artist) => ({
            external_urls: artist.external_urls,
            name: artist.name,
          }));
          return res;
        }),
        catchError((err) => {
          return throwError(() => new Error(err.error.error.message));
        })
      );
  }
}
