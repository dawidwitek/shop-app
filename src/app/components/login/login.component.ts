import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup;
  userData: User[] = [];
  getUsers$!: Subscription;

  constructor(private fb: FormBuilder, private service: AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [''],
      password: [''],
    });

    this.getUsers$ = this.service
      .getUsers()
      .subscribe((data) => (this.userData = data));
  }

  onSubmit(form: FormGroup) {
    this.service.loginUser(form.value, this.userData);
  }

  ngOnDestroy(): void {
    this.getUsers$.unsubscribe();
  }
}
