import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FocultiesComponent } from '../foculties/foculties.component';

@Component({
  selector: 'app-wildcard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './wildcard.component.html',
  styleUrl: './wildcard.component.css'
})
export class WildcardComponent {
routes = [
  {path: "/auth/login", component: "Login"},
  {path: "/auth/forgot-password", component: "Forgot password"},
  {path: "/auth/reset-password", component: "Reset Password"},
  {path: "/dashboard", component: "Dashboard"},
  {path: "/dashboard/faculties/add", component: "Add Faculties"},

]
}
