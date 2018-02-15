import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';


// Third party
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu-info',
  templateUrl: './menu-info.component.html',
  styleUrls: ['./menu-info.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuInfoComponent implements OnInit {
  public userEmail: string = '';
  @Output('logout') logout: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private authService: AuthService
  ) {
    this.authService.isAuthenticated().subscribe(data => {
      if (data) {
        this.userEmail = data.email;
      }
    });
  }


  ngOnInit() {}

  onLogoutClick() {
    this.logout.emit(true);
    this.authService.logout();
  }


}


