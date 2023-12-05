import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-add-staff',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css', '../all-width.css' ]
})
export class AddStaffComponent {
  
}
