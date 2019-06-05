import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseDashboardRoutingModule } from './course-dashboard-routing.module';
import { CourseDashboardComponent } from './course-dashboard/course-dashboard.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { MaterialModule } from '../material.module';
import { CourseDetailComponent } from './course-detail/course-detail.component';

@NgModule({
  declarations: [CourseDashboardComponent, CoursesListComponent, CourseDetailComponent],
  imports: [CommonModule, CourseDashboardRoutingModule, MaterialModule]
})
export class CourseDashboardModule {}
