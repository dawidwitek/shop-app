import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(private router: Router, private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`http://localhost:3000/users`);
  }

  loginUser(userData: User, userDataDB: User[]) {
    userDataDB.forEach((el) => {
      if (
        el.username === userData.username &&
        el.password === userData.password
      ) {
        this.isAuthenticatedSubject.next(true);
        this.router.navigate(['dashboard']);
      } else {
        this.isAuthenticatedSubject.next(false);
        this.router.navigate(['/login']);
      }
    });
  }

  logoutUser() {
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/']);
  }
}
