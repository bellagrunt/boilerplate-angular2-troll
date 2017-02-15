import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';




@Component({
  // selector: '',
  templateUrl: `./app/contact/contact.html`,
})

export class contactComponent {
  public contact = {firstName: "Matt", lastName: "Bella", phone: "99", email: "mattbellantoni3@gmail.com"};

  public showDetail = false;
  onSelect() {
    this.showDetail = true;
  }
}
