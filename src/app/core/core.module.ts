import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment.development';
import { API_URL } from './API_URL';
import { HttpClientModule } from '@angular/common/http';
import { AuthConfig, OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, OAuthModule.forRoot()],
  providers: [
    {
      provide: API_URL,
      useValue: environment.api_url,
    },
    {
      provide: AuthConfig,
      useValue: environment.authConfig,
    },
  ],
})
export class CoreModule {}
