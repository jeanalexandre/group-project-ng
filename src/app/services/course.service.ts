import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Course } from '../models/course.model';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CourseStudent } from '../models/course-student.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private currentCourseSubject: BehaviorSubject<Course[]>;
  public currentCourse: Observable<Course[]>;
  public currentSelectedCourseSubject: Subject<Course>;
  public currentSelectedCourse: Observable<Course>;
  private currentCourseStudentSubject: BehaviorSubject<CourseStudent[]>;
  public currentCourseStudent: Observable<CourseStudent[]>;

  constructor(private http: HttpClient, private toastr: ToastrService) {
    this.currentCourseSubject = new BehaviorSubject<Course[]>([]);
    this.currentCourse = this.currentCourseSubject.asObservable();
    this.currentSelectedCourseSubject = new Subject<Course>();
    this.currentSelectedCourse = this.currentSelectedCourseSubject.asObservable();
    this.currentCourseStudentSubject = new BehaviorSubject<CourseStudent[]>([]);
    this.currentCourseStudent = this.currentCourseStudentSubject.asObservable();
    this.loadCourses();
  }

  loadCourseStudentsforCourse(id: number) {
    this.http
      .get<CourseStudent[]>(
        `${environment.apiBaseUrl}/course-student/course/${id}`
      )
      .subscribe(courseStudents => {
        this.currentCourseStudentSubject.next(courseStudents);
      });
  }

  async setSelectedCourse(course: Course) {
    await this.currentSelectedCourseSubject.next(course);
    this.loadCourseStudentsforCourse(course.id);
  }

  loadCourses() {
    this.http
      .get<Course[]>(`${environment.apiBaseUrl}/course`)
      .subscribe(courses => {
        this.currentCourseSubject.next(courses);
      });
  }

  createCourse(course) {
    return this.http.post<Course>(`${environment.apiBaseUrl}/course`, course);
  }
}
