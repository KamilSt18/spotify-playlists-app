import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MusicApiService } from 'src/app/core/services/music-api/music-api.service';
import { AlbumDetailsResponse } from '../../model/AlbumDetailsResponse';

@Component({
  selector: 'app-album-details-view',
  templateUrl: './album-details-view.container.html',
  styleUrls: ['./album-details-view.container.scss'],
})
export class AlbumDetailsViewContainer {
  constructor(
    private route: ActivatedRoute,
    private service: MusicApiService
  ) {}

  id = '';
  subscriptions = new Subscription();
  albumDetails?: AlbumDetailsResponse;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['albumId'];

    this.service.fetchAlbumDetails(this.id).subscribe({
      next: (res) => (this.albumDetails = res),
      error: (err) => console.log(err),
    });
  }
}
