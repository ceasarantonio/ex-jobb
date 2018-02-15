import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { NgForm, FormControl, Validators } from '@angular/forms';




@Component({
  selector: 'app-notification-sandbox',
  templateUrl: './notification-sandbox.component.html',
  styleUrls: ['./notification-sandbox.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NotificationSandboxComponent implements OnInit {
  public content: string;
  title: string;
  pauseOnHover: boolean;
  progressBar: boolean;
  clickToClose: boolean;
  type: string;
  animationType: string;
  number: number;



@HostBinding('class.content') someField: boolean = true;




  // tslint:disable-next-line:one-line

  constructor( private notifactionService: NotificationsService ) {
    this.content = '';
    this.title = '';
    this.pauseOnHover = true;
    this.progressBar = true;
    this.clickToClose = true;
    this.number = 3000;
    this.type = 'alert';
    this.animationType = 'fromLeft';
   }

   onSubmit(f: NgForm) {
    this.notifactionService[this.type](this.title, this.content, {
      pauseOnHover: this.pauseOnHover,
      showProgressBar: this.progressBar,
      clickToClose: this.clickToClose,
      timeOut: this.number,
      animate: this.animationType,
    });
  }
    ngOnInit() {

    }


  }

