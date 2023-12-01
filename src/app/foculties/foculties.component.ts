import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-foculties',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './foculties.component.html',
  styleUrl: './foculties.component.css'
})
export class FocultiesComponent {

  inputs = [
    {label: "Faculty Name", id: "fname", name: "faculty", minLength: 1, placeholder: "Name of faculty", type: "text"},
    {label: "Number of Departments", id: "ndepartments", name: "departments", minLength: 1, placeholder: "Number of departments", type: "text"},
    {label: "Number of Programs", id: "programs", name: "programs", minLength: 3, placeholder: "programs", type: "text"},
    {label: "Contact", id: "contact", name: "contact", minLength: 10, placeholder: "contact(s)", type: "text"},
    {label: "Dean of Faculty", id: "dean", name: "dean", minLength: 3, placeholder: "Name of Dean", type: "text"},
    {label: "Number ofLectures", id: "nlecturers", name: "lecturers", minLength: 1, placeholder: "Lecturers", type: "text"},
    {label: "Email", id: "email", name: "email", minLength: 8, placeholder: "UMaT@email.com", type: "email"},
    {label: "Location", id: "location", name: "location", minLength: 3, placeholder: "location of faculty", type: "text"},
  ]
}
