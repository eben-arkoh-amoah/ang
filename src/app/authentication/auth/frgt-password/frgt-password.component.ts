import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgForm, FormsModule} from "@angular/forms";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-frgt-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './frgt-password.component.html',
  styleUrl: '../login/login.component.css'
})
export class FrgtPasswordComponent {

  
  onFormSubmit(form: NgForm) {

    if(form.invalid){
      return;
    }
       const LoginCredentials = {
        email:  form.value.email,
       }
    
       console.log(LoginCredentials)
      }
}
