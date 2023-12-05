import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FocultiesComponent } from '../foculties/foculties.component';

@Component({
  selector: 'app-wildcard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './wildcard.component.html',
  styleUrls: ['./wildcard.component.css', '../all-width.css' ]
})
export class WildcardComponent {
routes = [
  {path: "/auth/login", component: "Login"},
  {path: "/auth/forgot-password", component: "Forgot password"},
  {path: "/auth/reset-password", component: "Reset Password"},
  {path: "/dashboard", component: "Dashboard"},
  {path: "/dashboard/faculties/add", component: "Add Faculties"},
  {path: "/dashboard/departments/add", component: "Add Department"},
  {path: "/dashboard/programs/add", component: "Add Program"},
  {path: "/dashboard/staff/add/basic-info", component: "Add staff Basic Info"},
  {path: "/dashboard/staff/add/account-settings", component: "Add staff Account Settings"},
  {path: "/dashboard/students/add/basic-info", component: "Add Student Basic Info"},
  {path: "/dashboard/students/add/account-settings", component: "Add staff Account Settings"},

]
}
