import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment';
import { Classroom } from '../models/classroom.model';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  private currentClassroomSubject: BehaviorSubject<Classroom[]>;

  constructor(private http: HttpClient,
              private toastr: ToastrService) {
    this.currentClassroomSubject = new BehaviorSubject<Classroom[]>([]);
  }

  public get currentClassroomValue(): Observable<Classroom[]> {
    return this.currentClassroomSubject;
  }


  getClassrooms(): Observable<Classroom[]> {
    return this.http.get<Classroom[]>(`${environment.apiBaseUrl}/classroom`);
  }
}
