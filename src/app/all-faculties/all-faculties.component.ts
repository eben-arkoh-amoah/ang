import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatTableModule, MatTableDataSource } from '@angular/material/table'; 
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-all-faculties',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatTableModule, MatPaginatorModule, RouterLink],
  templateUrl: './all-faculties.component.html',
  styleUrl: './all-faculties.component.css'
})
export class AllFacultiesComponent {
  pageSizeOptions = [5, 10, 20, 25, 30];
  pageSize = this.pageSizeOptions[0];

 myDataArray=[
  {indx: 1, Faculty_Name: "Dpartment of Mining Engineering", Number_Departments: 10, Number_Programs: 10,
   Number_Lecturers: 200 ,Dean_Name:"Prof. John WIlliams Otoo", Action: "..."
},
 
  {indx: 1, Faculty_Name: "Dpartment of Mining Engineering", Number_Departments: 10, Number_Programs: 10,
   Number_Lecturers: 200 ,Dean_Name:"Prof. John WIlliams Otoo", Action: "..."
},
 
  {indx: 1, Faculty_Name: "Dpartment of Mining Engineering", Number_Departments: 10, Number_Programs: 10,
   Number_Lecturers: 200 ,Dean_Name:"Prof. John WIlliams Otoo", Action: "..."
},
 
  {indx: 1, Faculty_Name: "Dpartment of Mining Engineering", Number_Departments: 10, Number_Programs: 10,
   Number_Lecturers: 200 ,Dean_Name:"Prof. John WIlliams Otoo", Action: "..."
},
 
  {indx: 1, Faculty_Name: "Dpartment of Mining Engineering", Number_Departments: 10, Number_Programs: 10,
   Number_Lecturers: 200 ,Dean_Name:"Prof. John WIlliams Otoo", Action: "..."
},
 
  {indx: 1, Faculty_Name: "Dpartment of Mining Engineering", Number_Departments: 10, Number_Programs: 10,
   Number_Lecturers: 200 ,Dean_Name:"Prof. John WIlliams Otoo", Action: "..."
},
 
  {indx: 1, Faculty_Name: "Dpartment of Mining Engineering", Number_Departments: 10, Number_Programs: 10,
   Number_Lecturers: 200 ,Dean_Name:"Prof. John WIlliams Otoo", Action: "..."
},
 
  {indx: 1, Faculty_Name: "Dpartment of Mining Engineering", Number_Departments: 10, Number_Programs: 10,
   Number_Lecturers: 200 ,Dean_Name:"Prof. John WIlliams Otoo", Action: "..."
},
 
  {indx: 1, Faculty_Name: "Dpartment of Mining Engineering", Number_Departments: 10, Number_Programs: 10,
   Number_Lecturers: 200 ,Dean_Name:"Prof. John WIlliams Otoo", Action: "..."
},
 
  {indx: 1, Faculty_Name: "Dpartment of Mining Engineering", Number_Departments: 10, Number_Programs: 10,
   Number_Lecturers: 200 ,Dean_Name:"Prof. John WIlliams Otoo", Action: "..."
},
 
 ]

  columnsToDisplay = ['indx', 'Faculty_Name', 'Number_Programs', "Number_Departments"  ,"Number_Lecturers", "Dean_Name","Action"];

  dataSource = new MatTableDataSource<any>(this.myDataArray);

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
indexof: any;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }



}