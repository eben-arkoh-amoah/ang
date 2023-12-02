import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-program',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './add-program.component.html',
  styleUrl: './add-program.component.css'
})
export class AddProgramComponent {

  departments = [
    {value: "Engineering Department"},
    {value: "No Department"}
  ]
  selectedDepartment= this.departments[0];
}
