import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatTableModule, MatTableDataSource } from '@angular/material/table'; 
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-all-programs',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatTableModule, MatPaginatorModule, RouterLink],
  templateUrl: './all-programs.component.html',
  styleUrl:  '../all-faculties/all-faculties.component.css',
})
export class  AllProgramsComponent {
  pageSizeOptions = [5, 10, 20, 25, 30];
  pageSize = this.pageSizeOptions[0];

 myDataArray=[
  {indx: 1, Course_Name: "Bachelaor of Sciencein Mining Engineering", Department: "Department of Mining and Engineering", Staff: "Prof. Thomas Darkoh", Students: "50",
  Duration: "4 years", Action: "..."},
  {indx: 1, Course_Name: "Bachelaor of Sciencein Mining Engineering", Department: "Department of Mining and Engineering", Staff: "Prof. Thomas Darkoh", Students: "50",
  Duration: "4 years", Action: "..."},
  {indx: 1, Course_Name: "Bachelaor of Sciencein Mining Engineering", Department: "Department of Mining and Engineering", Staff: "Prof. Thomas Darkoh", Students: "50",
  Duration: "4 years", Action: "..."},
  {indx: 1, Course_Name: "Bachelaor of Sciencein Mining Engineering", Department: "Department of Mining and Engineering", Staff: "Prof. Thomas Darkoh", Students: "50",
  Duration: "4 years", Action: "..."},
  {indx: 1, Course_Name: "Bachelaor of Sciencein Mining Engineering", Department: "Department of Mining and Engineering", Staff: "Prof. Thomas Darkoh", Students: "50",
  Duration: "4 years", Action: "..."},
  {indx: 1, Course_Name: "Bachelaor of Sciencein Mining Engineering", Department: "Department of Mining and Engineering", Staff: "Prof. Thomas Darkoh", Students: "50",
  Duration: "4 years", Action: "..."},
  {indx: 1, Course_Name: "Bachelaor of Sciencein Mining Engineering", Department: "Department of Mining and Engineering", Staff: "Prof. Thomas Darkoh", Students: "50",
  Duration: "4 years", Action: "..."},
  {indx: 1, Course_Name: "Bachelaor of Sciencein Mining Engineering", Department: "Department of Mining and Engineering", Staff: "Prof. Thomas Darkoh", Students: "50",
  Duration: "4 years", Action: "..."},
  {indx: 1, Course_Name: "Bachelaor of Sciencein Mining Engineering", Department: "Department of Mining and Engineering", Staff: "Prof. Thomas Darkoh", Students: "50",
  Duration: "4 years", Action: "..."},
  {indx: 1, Course_Name: "Bachelaor of Sciencein Mining Engineering", Department: "Department of Mining and Engineering", Staff: "Prof. Thomas Darkoh", Students: "50",
  Duration: "4 years", Action: "..."},
  {indx: 1, Course_Name: "Bachelaor of Sciencein Mining Engineering", Department: "Department of Mining and Engineering", Staff: "Prof. Thomas Darkoh", Students: "50",
  Duration: "4 years", Action: "..."},
  {indx: 1, Course_Name: "Bachelaor of Sciencein Mining Engineering", Department: "Department of Mining and Engineering", Staff: "Prof. Thomas Darkoh", Students: "50",
  Duration: "4 years", Action: "..."},
  {indx: 1, Course_Name: "Bachelaor of Sciencein Mining Engineering", Department: "Department of Mining and Engineering", Staff: "Prof. Thomas Darkoh", Students: "50",
  Duration: "4 years", Action: "..."},
  {indx: 1, Course_Name: "Bachelaor of Sciencein Mining Engineering", Department: "Department of Mining and Engineering", Staff: "Prof. Thomas Darkoh", Students: "50",
  Duration: "4 years", Action: "..."},
  {indx: 1, Course_Name: "Bachelaor of Sciencein Mining Engineering", Department: "Department of Mining and Engineering", Staff: "Prof. Thomas Darkoh", Students: "50",
  Duration: "4 years", Action: "..."},
  {indx: 1, Course_Name: "Bachelaor of Sciencein Mining Engineering", Department: "Department of Mining and Engineering", Staff: "Prof. Thomas Darkoh", Students: "50",
  Duration: "4 years", Action: "..."},
  {indx: 1, Course_Name: "Bachelaor of Sciencein Mining Engineering", Department: "Department of Mining and Engineering", Staff: "Prof. Thomas Darkoh", Students: "50",
  Duration: "4 years", Action: "..."},
  {indx: 1, Course_Name: "Bachelaor of Sciencein Mining Engineering", Department: "Department of Mining and Engineering", Staff: "Prof. Thomas Darkoh", Students: "50",
  Duration: "4 years", Action: "..."},
  {indx: 1, Course_Name: "Bachelaor of Sciencein Mining Engineering", Department: "Department of Mining and Engineering", Staff: "Prof. Thomas Darkoh", Students: "50",
  Duration: "4 years", Action: "..."},
  {indx: 1, Course_Name: "Bachelaor of Sciencein Mining Engineering", Department: "Department of Mining and Engineering", Staff: "Prof. Thomas Darkoh", Students: "50",
  Duration: "4 years", Action: "..."},
  {indx: 1, Course_Name: "Bachelaor of Sciencein Mining Engineering", Department: "Department of Mining and Engineering", Staff: "Prof. Thomas Darkoh", Students: "50",
  Duration: "4 years", Action: "..."},
  {indx: 1, Course_Name: "Bachelaor of Sciencein Mining Engineering", Department: "Department of Mining and Engineering", Staff: "Prof. Thomas Darkoh", Students: "50",
  Duration: "4 years", Action: "..."},
  {indx: 1, Course_Name: "Bachelaor of Sciencein Mining Engineering", Department: "Department of Mining and Engineering", Staff: "Prof. Thomas Darkoh", Students: "50",
  Duration: "4 years", Action: "..."},
  {indx: 1, Course_Name: "Bachelaor of Sciencein Mining Engineering", Department: "Department of Mining and Engineering", Staff: "Prof. Thomas Darkoh", Students: "50",
  Duration: "4 years", Action: "..."},
  {indx: 1, Course_Name: "Bachelaor of Sciencein Mining Engineering", Department: "Department of Mining and Engineering", Staff: "Prof. Thomas Darkoh", Students: "50",
  Duration: "4 years", Action: "..."},
  {indx: 1, Course_Name: "Bachelaor of Sciencein Mining Engineering", Department: "Department of Mining and Engineering", Staff: "Prof. Thomas Darkoh", Students: "50",
  Duration: "4 years", Action: "..."},
  {indx: 1, Course_Name: "Bachelaor of Sciencein Mining Engineering", Department: "Department of Mining and Engineering", Staff: "Prof. Thomas Darkoh", Students: "50",
  Duration: "4 years", Action: "..."},
  {indx: 1, Course_Name: "Bachelaor of Sciencein Mining Engineering", Department: "Department of Mining and Engineering", Staff: "Prof. Thomas Darkoh", Students: "50",
  Duration: "4 years", Action: "..."},
  {indx: 1, Course_Name: "Bachelaor of Sciencein Mining Engineering", Department: "Department of Mining and Engineering", Staff: "Prof. Thomas Darkoh", Students: "50",
  Duration: "4 years", Action: "..."},
  {indx: 1, Course_Name: "Bachelaor of Sciencein Mining Engineering", Department: "Department of Mining and Engineering", Staff: "Prof. Thomas Darkoh", Students: "50",
  Duration: "4 years", Action: "..."},
  {indx: 1, Course_Name: "Bachelaor of Sciencein Mining Engineering", Department: "Department of Mining and Engineering", Staff: "Prof. Thomas Darkoh", Students: "50",
  Duration: "4 years", Action: "..."},
 ]

  columnsToDisplay = ['indx', 'Course_Name', 'Department', "Staff", "Students", "Duration","Action"];

  dataSource = new MatTableDataSource<any>(this.myDataArray);

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
indexof: any;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }



}
