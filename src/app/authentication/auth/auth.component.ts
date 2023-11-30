import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet,  RouterLink } from '@angular/router';


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

}
