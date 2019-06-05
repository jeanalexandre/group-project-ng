import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseDashboardComponent } from './course-dashboard/course-dashboard.component';
import { AuthGuard } from '../_guards/auth.guard';

const routes: Routes = [
  { path: '', component: CourseDashboardComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseDashboardRoutingModule {}
