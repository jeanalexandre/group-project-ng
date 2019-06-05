import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material';
import { Course } from 'src/app/models/course.model';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;

  public dataSource;
  public displayedColumns: string[] = ['nom', 'prenom', 'presence'];
  public selectedCourse: Course;

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courseService.currentSelectedCourse.subscribe(course => {
      this.selectedCourse = course;
    });
    this.courseService.currentCourseStudent.subscribe(courseStudents => {
      this.dataSource = courseStudents;
    });
  }
}
