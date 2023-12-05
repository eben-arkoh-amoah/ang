import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-department',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './add-department.component.html',
  styleUrls: ['../foculties/foculties.component.css', '../all-width.css' ]
})
export class AddDepartmentComponent {

  inputs = [
    {label: "Department Name", id: "dname", name: "dpartment", minLength: 1, placeholder: "Name of department", type: "text"},
    {label: "HOD Name", id: "HOD", name: "HOD", minLength: 3, placeholder: "Name of HOD", type: "text"},
    {label: "Number of students", id: "nstudents", name: "students", minLength: 1, placeholder: "Number of students", type: "text"},
    {label: "Number of Lectures", id: "nlecturers", name: "lecturers", minLength: 1, placeholder: "Lecturers", type: "text"},
    {label: "Number of Programs", id: "programs", name: "programs", minLength: 3, placeholder: "programs", type: "text"},
    {label: "Email", id: "email", name: "email", minLength: 8, placeholder: "UMaT@email.com", type: "email"},
    {label: "Contact", id: "contact", name: "contact", minLength: 10, placeholder: "contact(s)", type: "text"},
    {label: "Location", id: "location", name: "location", minLength: 3, placeholder: "location of department", type: "text"},
  ]


}
