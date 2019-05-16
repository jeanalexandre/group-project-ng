import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from '../models/user.model';

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post<any>(`${environment.apiBaseUrl}/auth/login`, {email, password})
      .pipe(map(res => {
        const token = res.token;
        // login successful if there's a jwt token in the response
        if (res && token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('userToken', JSON.stringify(token));
          // this.currentUserSubject.next(res.token);
        }
        return token;
        // const user: User = res.userDto;
        //
        // // login successful if there's a jwt token in the response
        // if (res && res.token) {
        //   // store user details and jwt token in local storage to keep user logged in between page refreshes
        //   user.token = res.token;
        //   localStorage.setItem('currentUser', JSON.stringify(user));
        //   this.currentUserSubject.next(user);
        // }
        // return user;
      }));
  }

  register(register) {
    this.http.post<User>(`${environment.apiBaseUrl}/auth/register`, register).subscribe(user => {
      return user;
    });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
