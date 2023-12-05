import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AuthComponent } from './authentication/auth/auth.component';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgChartsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './all-width.css' ]
  
})
export class AppComponent {
  title = 'backOffice';
}
