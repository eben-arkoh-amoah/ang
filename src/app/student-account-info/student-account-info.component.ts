import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-account-info',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-account-info.component.html',
  styleUrl: '../staff-acnt-stngs/staff-acnt-stngs.component.css'
})
export class StudentAccountInfoComponent {

}
