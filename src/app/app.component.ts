import { Component } from '@angular/core';
import { AuthService } from './core/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private auth: AuthService) {}
  
  loggedIn = false;
  open = false;

  ngOnInit(): void {
    this.auth.init()

    this.loggedIn = Boolean(this.auth.getToken())
  }

  zaloguj(event: MouseEvent) {
    this.auth.login()
  }

  wyloguj(event: MouseEvent) {
    this.auth.logout()
  }
}
