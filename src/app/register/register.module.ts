import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { MaterialModule } from '../material.module';
import { RegisterRoutingModule } from './register-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RegisterRoutingModule,
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
