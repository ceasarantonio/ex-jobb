import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';
import { AlertsService } from '@jaspero/ng2-alerts';
import { NgForm, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-alert-sandbox',
  templateUrl: './alert-sandbox.component.html',
  styleUrls: ['./alert-sandbox.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AlertSandboxComponent implements OnInit {
  public alertOptions: any = {
    overlay: true,
    overlayClickToClose: true,
    showCloseButton: true,
    duration: 1500
  };
  public type: any;
  public message: string;

  @HostBinding('class.content') someField: boolean = true;

  constructor(private _alert: AlertsService) {
    this.alertOptions.overlay = true;
    this.alertOptions.overlayClickToClose = true;
    this.alertOptions.showCloseButton = true;
    this.alertOptions.duration = 3000;

    this.type = 'warning';
    this.message = '';
  }

  ngOnInit() {
  }

  onSubmit(event, f: NgForm) {
    event.preventDefault();
    this._alert.create(this.type, this.message, {
      overlay: this.alertOptions.overlay,
      overlayClickToClose: this.alertOptions.overlayClickToClose,
      showCloseButton: this.alertOptions.showCloseButton,
      duration: this.alertOptions.duration,
    });
  }
}
