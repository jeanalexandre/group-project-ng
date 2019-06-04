import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MaterialModule } from '../material.module';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    LoginRoutingModule,
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
