import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path: '', component: AppComponent, pathMatch: 'full'},
  {path: 'login', loadChildren: './login/login.module#LoginModule'},
  {path: 'register', loadChildren: './register/register.module#RegisterModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
