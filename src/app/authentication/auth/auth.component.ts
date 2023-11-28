import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage,LoginComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

}
