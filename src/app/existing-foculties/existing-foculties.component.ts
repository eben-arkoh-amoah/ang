import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-existing-foculties',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './existing-foculties.component.html',
  styleUrls: ['./existing-foculties.component.css', '../all-width.css' ]
})
export class ExistingFocultiesComponent {

}
