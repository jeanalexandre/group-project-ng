import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitDataRoutingModule } from './init-data-routing.module';
import { InitDataComponent } from './init-data.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [InitDataComponent],
  imports: [
    CommonModule,
    InitDataRoutingModule,
    MaterialModule,
  ]
})
export class InitDataModule { }
