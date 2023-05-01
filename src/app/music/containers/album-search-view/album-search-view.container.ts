import { Component, Inject } from '@angular/core';
import { MusicApiService } from 'src/app/core/services/music-api/music-api.service';
import { Album } from '../../model/AlbumSearchResponse';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, filter, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-album-search-view',
  templateUrl: './album-search-view.container.html',
  styleUrls: ['./album-search-view.container.scss'],
})
export class AlbumSearchViewContainer {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    @Inject(MusicApiService) private service: MusicApiService
  ) {}

  results: Album[] = [];
  message = '';
  query = '';
  subscriptions = new Subscription();

  ngOnInit(): void {
    const queryChanges = this.route.queryParamMap.pipe(
      map((qpm) => qpm.get('q')),
      filter(Boolean)
    );

    this.subscriptions.add(
      queryChanges
        .pipe(switchMap((query) => this.service.fetchAlbumSearchResults(query)))
        .subscribe({
          next: (albums) => {
            this.results = albums;
          },
          error: (err) => {
            this.message = err.message;
          },
        })
    );

    this.subscriptions.add(
      queryChanges.subscribe((query) => {
        this.query = query;
      })
    );
  }

  search(query: string) {
    if (!query) {
      this.message = 'No search query';
      return;
    }
    // reset error
    this.message = '';

    this.router.navigate([], {
      relativeTo: this.route,

      queryParams: {
        q: query,
      },
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
