import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { StationsListComponent } from './stations-list/stations-list.component';
import { StationsFormComponent } from './stations-form/stations-form.component';
import { StationDetailsComponent } from './station-details/station-details.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [DashboardComponent, StationsListComponent, StationsFormComponent, StationDetailsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
  ]
})
export class DashboardModule { }
