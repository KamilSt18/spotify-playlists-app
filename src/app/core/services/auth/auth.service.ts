import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private oauth: OAuthService) {}

  login() {
    this.oauth.initLoginFlow();
  }

  logout() {
    this.oauth.logOut();
  }

  init() {
    this.oauth.tryLogin();
  }

  getToken() {
    return this.oauth.getAccessToken();
  }
}
