// Angular
import {HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentService } from './services/student.service';
import { AuthService } from './services/auth.service';

// Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';


// Components
import { AppComponent } from './app.component';
import { Routei18nComponent } from './modules/route-i18n/route-i18n.component';
import { RouteNotificationComponent} from './modules/route-notification/route-notification.component';
import { RouteAlertComponent } from './modules/route-alert/route-alert.component';
import { RouteLoginComponent } from './modules/route-login/route-login.component';
import { RouteStudentsComponent } from './modules/route-students/route-students.component';
import { StartPageComponent } from './modules/start-page/start-page.component';
import { NotificationSandboxComponent } from './components/notification-sandbox/notification-sandbox.component';
import { AlertSandboxComponent } from './components/alert-sandbox/alert-sandbox.component';
import { I18nComponent } from './components/i18n/i18n.component';
import { StudentsComponent } from './components/students/students.component';


// Third party
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {  JasperoAlertsModule } from '@jaspero/ng2-alerts';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { LoginComponent } from './components/login/login.component';
import { FlashMessagesModule } from 'angular2-flash-messages';


import { AuthGuardService as AuthGuard } from './services/auth-guard/auth-guard.service';
import { MenuInfoComponent } from './components/menu-info/menu-info.component';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { DetailsStudentComponent } from './components/details-student/details-student.component';



const appRoutes: Routes = [
  { path: 'login', component: RouteLoginComponent },
  { canActivate: [AuthGuard], path: '', component: StartPageComponent },
  { canActivate: [AuthGuard], path: 'i18n', component: Routei18nComponent },
  { canActivate: [AuthGuard], path: 'notification', component: RouteNotificationComponent },
  { canActivate: [AuthGuard], path: 'alert', component: RouteAlertComponent },
  { canActivate: [AuthGuard], path: 'students', pathMatch: 'full', component: RouteStudentsComponent },
  { canActivate: [AuthGuard], path: 'student/:id', component: DetailsStudentComponent },
  { canActivate: [AuthGuard], path: 'create-student', component: CreateStudentComponent },
  { path: '**', redirectTo: '' }
];


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'lang/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    Routei18nComponent,
    RouteNotificationComponent,
    StartPageComponent,
    NotificationSandboxComponent,
    AlertSandboxComponent,
    RouteAlertComponent,
    RouteLoginComponent,
    RouteStudentsComponent,
    StudentsComponent,
    LoginComponent,
    I18nComponent,
    MenuInfoComponent,
    CreateStudentComponent,
    DetailsStudentComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    FormsModule,
    MatRadioModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    JasperoAlertsModule,
    FlashMessagesModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase, 'boilerplateapp'),
    AngularFireAuthModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    AngularFireDatabase,
    AngularFireDatabaseModule,
    StudentService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent],
  exports: [
    MatRadioModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule
  ]
})
export class AppModule {}
