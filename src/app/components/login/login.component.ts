import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../models/User'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  validUser: User = {
    email: 'test@moveo.group',
    password: '123'
  }

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(3)]]
    })
  }

  ngOnInit(): void {

  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    if (this.email?.value !== this.validUser.email ||
      this.password?.value !== this.validUser.password) {
      this.loginForm.setErrors({ ...this.loginForm.errors, 'invalidDetails': true });
    }
    else {
      this.router.navigate(['nasa'])
    }

  }

}
