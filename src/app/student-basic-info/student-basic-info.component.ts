import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-basic-info',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './student-basic-info.component.html',
  styleUrls: ['../basic-staff-info/basic-staff-info.component.css', '../all-width.css' ]
})
export class StudentBasicInfoComponent {
  departments = [
    {value: "Engineering Department"},
    {value: "No Department"}
  ]
  selectedDepartment= this.departments[0];

  genders = [
    {value: "Female"},
    {value: "Male"},
    {value: "Other"}
  ]

  selectedGender = this.genders[0];
}
