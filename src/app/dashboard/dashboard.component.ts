import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  subLinks = [
    {link: "centers", img: "../../assets/images/centers.svg", name: "Centers"},
    {link: "faculties/add", img: "../../assets/images/faculties.png", name: "Faculties"},
    {link: "departments", img: "../../assets/images/departments.png", name: "Departments"},
    {link: "programs", img: "../../assets/images/programs.png", name: "Programs"},
    {link: "students", img: "../../assets/images/students.png", name: "Students"},
  ]

  isUniversitySetOpened = true;

  openUniversitySetup(){
   this.isUniversitySetOpened = !this.isUniversitySetOpened;
  }
}
