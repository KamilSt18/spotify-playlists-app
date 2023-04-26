import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Hello';

  user = {
    name: '',
  };

  zaloguj(event: MouseEvent) {
    this.user = {
      name: 'Admin',
    };
}

  wyloguj(event: MouseEvent) {
    this.user = {
      name: '',
    };
}
}
