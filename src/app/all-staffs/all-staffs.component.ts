import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatTableModule, MatTableDataSource } from '@angular/material/table'; 
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-all-staffs',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatTableModule, MatPaginatorModule, RouterLink],
  templateUrl: './all-staffs.component.html',
  styleUrl:  '../all-faculties/all-faculties.component.css',
})
export class  AllStaffsComponent {
  pageSizeOptions = [5, 10, 20, 25, 30];
  pageSize = this.pageSizeOptions[0];

 myDataArray=[
  {indx: 1, Staff_Name: "Prof. Thomas Opare Darkoh", Department: "Department of Mining and Engineering", Email: "thomasino@gmail.com", Courses: "Mining, Electronics",
  Role: "Lecturer", Action: "..."
},
  {indx: 1, Staff_Name: "Prof. Thomas Opare Darkoh", Department: "Department of Mining and Engineering", Email: "thomasino@gmail.com", Courses: "Mining, Electronics",
  Role: "Lecturer", Action: "..."
},
  {indx: 1, Staff_Name: "Prof. Thomas Opare Darkoh", Department: "Department of Mining and Engineering", Email: "thomasino@gmail.com", Courses: "Mining, Electronics",
  Role: "Lecturer", Action: "..."
},
  {indx: 1, Staff_Name: "Prof. Thomas Opare Darkoh", Department: "Department of Mining and Engineering", Email: "thomasino@gmail.com", Courses: "Mining, Electronics",
  Role: "Lecturer", Action: "..."
},
  {indx: 1, Staff_Name: "Prof. Thomas Opare Darkoh", Department: "Department of Mining and Engineering", Email: "thomasino@gmail.com", Courses: "Mining, Electronics",
  Role: "Lecturer", Action: "..."
},
  {indx: 1, Staff_Name: "Prof. Thomas Opare Darkoh", Department: "Department of Mining and Engineering", Email: "thomasino@gmail.com", Courses: "Mining, Electronics",
  Role: "Lecturer", Action: "..."
},
  {indx: 1, Staff_Name: "Prof. Thomas Opare Darkoh", Department: "Department of Mining and Engineering", Email: "thomasino@gmail.com", Courses: "Mining, Electronics",
  Role: "Lecturer", Action: "..."
},
  {indx: 1, Staff_Name: "Prof. Thomas Opare Darkoh", Department: "Department of Mining and Engineering", Email: "thomasino@gmail.com", Courses: "Mining, Electronics",
  Role: "Lecturer", Action: "..."
},
  {indx: 1, Staff_Name: "Prof. Emmanuel Opare Darkoh", Department: "Department of Building and Engineering", Email: "thomasino@gmail.com", Courses: "Mining, Electronics",
  Role: "Lecturer", Action: "..."
},
 ]

  columnsToDisplay = ['indx', 'Staff_Name', 'Department', "Email", "Courses", "Role","Action"];

  dataSource = new MatTableDataSource<any>(this.myDataArray);

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
indexof: any;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}