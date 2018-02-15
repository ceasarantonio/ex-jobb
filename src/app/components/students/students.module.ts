import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RouteLoginComponent } from '../../modules/route-login/route-login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class StudentsModule { }

const appRoutes: Routes = [
  {path: 'route-login', component: RouteLoginComponent},


];
