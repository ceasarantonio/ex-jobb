import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AlertsService } from '@jaspero/ng2-alerts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  public alertOptions: any = {
    overlay: true,
    overlayClickToClose: true,
    showCloseButton: true,
    duration: 1500
  };
  public type: any;
  public message: string;
  email: string;
  password: string;

  @HostBinding('class.content') someField = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private _alert: AlertsService


  ) {
    this.alertOptions.overlay = true;
    this.alertOptions.overlayClickToClose = true;
    this.alertOptions.showCloseButton = true;
    this.alertOptions.duration = 10000;

    this.type = 'warning';
    this.message = 'Wrong email or wrong password';
   }

  ngOnInit() {

  }

  onSubmit() {
    this.authService.login(this.email, this.password).then((res) => {
      this.router.navigate(['/start-page']);
    })
      .catch((err) => {
        event.preventDefault();
        this._alert.create(this.type, this.message, {
          overlay: this.alertOptions.overlay,
          overlayClickToClose: this.alertOptions.overlayClickToClose,
          showCloseButton: this.alertOptions.showCloseButton,
          duration: this.alertOptions.duration,
        });
      });
    }
  }
