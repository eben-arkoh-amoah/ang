import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { AllFacultiesComponent } from '../all-faculties/all-faculties.component';

@Component({
  selector: 'app-existing-foculties',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, RouterLinkActive, AllFacultiesComponent],
  templateUrl: './existing-foculties.component.html',
  styleUrls: ['./existing-foculties.component.css', '../all-width.css' ]
})
export class ExistingFocultiesComponent {

  heading = 'Add Faculty'
}
