import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {

  form = {
    fname : '',
    lname : '',
    age : '',
    mobile : '',
    email : '',
  }
  emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  ageRegex = /^(1[8-9]|[2-9][0-9])$/;
  mobileNumberRegex = /^(?:\+?88)?01[3-9]\d{8}$/;

  registerForm(){
    console.log(this.form)
  }

}
