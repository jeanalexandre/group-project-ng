import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatBottomSheet } from '@angular/material';
import { Course } from 'src/app/models/course.model';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;

  public dataSource;
  public displayedColumns: string[] = [
    'intitulé',
    'enseignant',
    'promo',
    'début',
    'fin'
  ];
  public selectedCourse: Course;

  constructor(
    private courseService: CourseService,
    private bottomSheet: MatBottomSheet
  ) {}

  ngOnInit() {
    this.courseService.currentCourse.subscribe(courses => {
      this.dataSource = courses;
    });

    this.courseService.currentSelectedCourse.subscribe(course => {
      this.selectedCourse = course;
    });
  }

  selectCourse(course: Course) {
    this.courseService.setSelectedCourse(course);
  }
}
