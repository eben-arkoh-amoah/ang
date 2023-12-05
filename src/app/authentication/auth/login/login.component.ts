import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, NgForm} from "@angular/forms";
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../../all-width.css' ]
})
export class LoginComponent {

  onFormSubmit(form: NgForm) {

if(form.invalid){
  return;
}
   const LoginCredentials = {
    email:  form.value.email,
    password: form.value.password
   }

   console.log(LoginCredentials)
  }

}
