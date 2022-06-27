import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from 'src/app/core/models/User';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit, OnDestroy {
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
