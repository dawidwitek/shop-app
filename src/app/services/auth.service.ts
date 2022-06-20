import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  #isLogged = new BehaviorSubject(false);

  constructor(private router: Router, private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`http://localhost:3000/users`);
  }

  isAuthenticated(): Observable<boolean> {
    return this.#isLogged.asObservable();
  }

  loginUser(userData: User, userDataDB: User[]) {
    userDataDB.forEach((el) => {
      if (
        el.username === userData.username &&
        el.password === userData.password
      ) {
        this.#isLogged.next(true);
        this.router.navigate(['dashboard']);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

  logoutUser() {
    this.#isLogged.next(false);
    this.router.navigate(['/']);
  }
}
