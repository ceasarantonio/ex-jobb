import { Component, OnInit, HostBinding } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-route-i18n',
  templateUrl: './route-i18n.component.html',
  styleUrls: ['./route-i18n.component.scss']
})
export class Routei18nComponent implements OnInit {
  private test: any;

  @HostBinding('class.content') someField: boolean = true;

  constructor( public translate: TranslateService ) {
    translate.setDefaultLang('en');
   }
   switchLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnInit() {
  }

}
