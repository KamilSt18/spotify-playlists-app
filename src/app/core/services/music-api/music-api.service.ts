import { Inject, Injectable } from '@angular/core';
import { API_URL } from '../../API_URL';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { AlbumSearchResponse } from 'src/app/music/model/AlbumSearchResponse';
import { catchError, map, pipe, throwError } from 'rxjs';
import { UserResponse } from 'src/app/shared/models/UserResponse';
import { AlbumDetailsResponse } from 'src/app/music/model/AlbumDetailsResponse';
import { UserPlaylistsResponse } from 'src/app/playlists/models/UserPlaylistsResponse';
import { Playlist } from 'src/app/playlists/containers/playlists-view/Playlist';

@Injectable({
  providedIn: 'root',
})
export class MusicApiService {
  constructor(
    private http: HttpClient,
    private auth: AuthService,
    @Inject(API_URL) private api_url: string
  ) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.getToken(),
    }),
  };

  fetchAlbumSearchResults(query: string) {
    return this.http
      .get<AlbumSearchResponse>(this.api_url + 'search', {
        ...this.httpOptions,
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
      .get<UserResponse>(this.api_url + 'me', this.httpOptions)
      .pipe(
        catchError((err) => {
          return throwError(() => Error(err.error.error.message));
        })
      );
  }

  fetchUserPlaylists() {
    return this.http
      .get<UserPlaylistsResponse>(
        this.api_url + 'me/playlists',
        this.httpOptions
      )
      .pipe(
        catchError((err) => {
          return throwError(() => Error(err.error.error.message));
        })
      );
  }

  fetchAlbumDetails(id: string) {
    return this.http
      .get<AlbumDetailsResponse>(
        this.api_url + `albums/${id}`,
        this.httpOptions
      )
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

  changePlaylistDetails(draft: Playlist) {
    return this.http
      .put(
        this.api_url + 'playlists/' + draft.id,
        {
          name: draft.name,
          description: draft.description,
          public: draft.public,
        },
        this.httpOptions
      )
      .pipe(
        map((res) => {
          return res;
        }),
        catchError((err) => {
          return throwError(() => new Error(err.error.error.message));
        })
      );
  }
}
