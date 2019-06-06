import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment';
import { Classroom } from '../models/classroom.model';
import { User } from '../models/user.model';

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

  createClassroom(classroom) {
    return this.http.post<Classroom>(`${environment.apiBaseUrl}/classroom`, classroom);
  }

  createPromo(promo) {
    return this.http.post<Classroom>(`${environment.apiBaseUrl}/promo`, promo);
  }

  addUserToPromo(promoId, userId) {
    return this.http.post<Classroom>(`${environment.apiBaseUrl}/promo/${promoId}/addStudent/${userId}`, '');
  }

  getClassrooms(): Observable<Classroom[]> {
    return this.http.get<Classroom[]>(`${environment.apiBaseUrl}/classroom`);
  }
}
