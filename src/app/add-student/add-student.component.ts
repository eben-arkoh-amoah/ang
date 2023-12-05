import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './add-student.component.html',
  styleUrls: ['../add-staff/add-staff.component.css', '../all-width.css' ]
})
export class AddStudentComponent {

}
