import { Component } from '@angular/core';
import { NgModule, ApplicationRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
    templateUrl: './app/login/login.html',
})

export class logInComponent {
  public loginForm = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  });
  constructor(public fb: FormBuilder) {}
  // doLogin(event) {
  //   console.log(event);
  //   console.log(this.loginForm.value);
  // }
}