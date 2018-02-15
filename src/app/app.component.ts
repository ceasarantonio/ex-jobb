import { Component } from '@angular/core';

import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public notifictionsOptions: any = {
    position: ['bottom', 'right'],
    lastOnBottom: true,
    maxLength: 100,
    maxStack: 5,
    preventDuplicates: true
  };

  constructor(
    public authService: AuthService
  ) {}
}
