import { Component } from '@angular/core';
import { AuthService } from './core/services/auth/auth.service';
import { MusicApiService } from './core/services/music-api/music-api.service';
import { UserResponse } from './shared/models/UserResponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private auth: AuthService, private service: MusicApiService) {}

  loggedIn = false;
  open = false;
  message = '';
  currentUser?: UserResponse;

  ngOnInit(): void {
    this.auth.init();

    this.loggedIn = Boolean(this.auth.getToken());

    if (this.loggedIn) {
      this.service.fetchUserProfile().subscribe({
        next: (user) => (this.currentUser = user),
        error: (err) => (this.message = err),
      });
    }
  }

  zaloguj(event: MouseEvent) {
    this.auth.login();
  }

  wyloguj(event: MouseEvent) {
    this.auth.logout();
    this.currentUser = undefined
  }
}
