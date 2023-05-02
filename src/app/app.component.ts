import { Component } from '@angular/core';
import { AuthService } from './core/services/auth/auth.service';
import { MusicApiService } from './core/services/music-api/music-api.service';
import { UserResponse } from './shared/models/UserResponse';
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

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
  dateYear = new Date().getFullYear();
  blendHeader = '/assets/Blend-Header.webp';
  // icons
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faGithub = faGithub;

  ngOnInit(): void {
    this.auth.init();

    this.loggedIn = Boolean(this.auth.getToken());

    if (this.loggedIn) {
      this.service.fetchUserProfile().subscribe({
        next: (user) => (this.currentUser = user),
        error: (err) => (this.message = err.message),
      });
    }
  }

  login(event: MouseEvent) {
    this.auth.login();
  }

  logout(event: MouseEvent) {
    this.auth.logout();
    this.currentUser = undefined;
  }
}
