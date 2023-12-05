import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {FormsModule, NgForm} from '@angular/forms';



@Component({
  selector: 'app-reset',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './reset.component.html',
  styleUrls: ['../login/login.component.css', '../../../all-width.css' ]
})
export class ResetComponent {


  onFormSubmit(form: NgForm) {

    if(form.invalid){
      return;
    }
       const LoginCredentials = {
        password:  form.value.password1,
       }
    
       console.log(LoginCredentials)
      }
}
