import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatTableModule, MatTableDataSource } from '@angular/material/table'; 
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-deparments',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatTableModule, MatPaginatorModule, RouterLink],
  templateUrl: './departments.component.html',
  styleUrl: '../all-faculties/all-faculties.component.css'
})
export class DepartmentsComponent {
  pageSizeOptions = [5, 10, 20, 25, 30];
  pageSize = this.pageSizeOptions[0];

 myDataArray=[
  {indx: 1, Department_Name: "Dpartment of Mining Engineering", Number_Programs: 10, 
  Number_Students: 200, Number_Lecturers: 200 ,HOD_Name:"Prof. John WIlliams Otoo", Action: "..."
},
  {indx: 2, Department_Name: "Dpartment of Mining Engineering", Number_Programs: 10, 
  Number_Students: 200, Number_Lecturers: 200 ,HOD_Name:"Prof. John WIlliams Otoo", Action: "..."
},
  {indx: 3, Department_Name: "Dpartment of Mining Engineering", Number_Programs: 10, 
  Number_Students: 200, Number_Lecturers: 200 ,HOD_Name:"Prof. John WIlliams Otoo", Action: "..."
},
  {indx: 4, Department_Name: "Dpartment of Mining Engineering", Number_Programs: 10, 
  Number_Students: 200, Number_Lecturers: 200 ,HOD_Name:"Prof. John WIlliams Otoo", Action: "..."
},
  {indx: 5, Department_Name: "Dpartment of Mining Engineering", Number_Programs: 10, 
  Number_Students: 200, Number_Lecturers: 200 ,HOD_Name:"Prof. John WIlliams Otoo", Action: "..."
},
  {indx: 6, Department_Name: "Dpartment of Mining Engineering", Number_Programs: 10, 
  Number_Students: 200, Number_Lecturers: 200 ,HOD_Name:"Prof. John WIlliams Otoo", Action: "..."
},
  {indx: 7, Department_Name: "Dpartment of Mining Engineering", Number_Programs: 10, 
  Number_Students: 200, Number_Lecturers: 200 ,HOD_Name:"Prof. John WIlliams Otoo", Action: "..."
},
  {indx: 8, Department_Name: "Dpartment of Mining Engineering", Number_Programs: 10, 
  Number_Students: 200, Number_Lecturers: 200 ,HOD_Name:"Prof. John WIlliams Otoo", Action: "..."
},
  {indx: 9, Department_Name: "Dpartment of Mining Engineering", Number_Programs: 10, 
  Number_Students: 200, Number_Lecturers: 200 ,HOD_Name:"Prof. John WIlliams Otoo", Action: "..."
},
  {indx: 10, Department_Name: "Dpartment of Mining Engineering", Number_Programs: 10, 
  Number_Students: 200, Number_Studes: 200, Number_Lecturers: 200 ,HOD_Name:"Prof. John WIlliams Otoo", Action: "..."
},
  {indx: 11, Department_Name: "Dpartment of Mining Engineering", Number_Programs: 10, 
  Number_Students: 200, Number_Lecturers: 200, HOD_Name:"Prof. John WIlliams Otoo", Action: "..."
},
  {indx: 12, Department_Name: "Dpartment of Mining Engineering", Number_Programs: 10, 
  Number_Students: 200, Number_Lecturers: 200, HOD_Name:"Prof. John WIlliams Otoo", Action: "..."
},
  {indx: 13, Department_Name: "Dpartment of Mining Engineering", Number_Programs: 10, 
  Number_Students: 200, Number_Lecturers: 200, HOD_Name:"Prof. John WIlliams Otoo", Action: "..."
},
  {indx: 14, Department_Name: "Dpartment of Mining Engineering", Number_Programs: 10, 
  Number_Students: 200, Number_Lecturers: 200, HOD_Name:"Prof. John WIlliams Otoo", Action: "..."
},
  {indx: 15, Department_Name: "Dpartment of Mining Engineering", Number_Programs: 10, 
  Number_Students: 200, Number_Lecturers: 200, HOD_Name:"Prof. John WIlliams Otoo", Action: "..."
},
  {indx: 16, Department_Name: "Dpartment of Mining Engineering", Number_Programs: 10, 
  Number_Students: 200, Number_Lecturers: 200, HOD_Name:"Prof. John WIlliams Otoo", Action: "..."
},
  {indx: 17, Department_Name: "Dpartment of Mining Engineering", Number_Programs: 10, 
  Number_Students: 200, Number_Lecturers: 200, HOD_Name:"Prof. John WIlliams Otoo", Action: "..."
},
  {indx: 18, Department_Name: "Dpartment of Mining Engineering", Number_Programs: 10, 
  Number_Students: 200, Number_Lecturers: 200, HOD_Name:"Prof. John WIlliams Otoo", Action: "..."
},
  {indx: 19, Department_Name: "Dpartment of Mining Engineering", Number_Programs: 10, 
  Number_Students: 200, Number_Lecturers: 200, HOD_Name:"Prof. John WIlliams Otoo", Action: "..."
},
  {indx: 20, Department_Name: "Dpartment of Mining Engineering", Number_Programs: 10, 
  Number_Students: 200, HOD_Name:"Prof. John WIlliams Otoo", Action: "..."
},
  {indx: 21, Department_Name: "Dpartment of Mining Engineering", Number_Programs: 10, 
  Number_Students: 200, Number_Lecturers: 200, HOD_Name:"Prof. John WIlliams Otoo", Action: "..."
},
  {indx: 22, Department_Name: "Dpartment of Mining Engineering", Number_Programs: 10, 
  Number_Students: 200, Number_Lecturers: 200, HOD_Name:"Prof. John WIlliams Otoo", Action: "..."
},
  {indx: 23, Department_Name: "Dpartment of Mining Engineering", Number_Programs: 10, 
  Number_Students: 200, Number_Lecturers: 200, HOD_Name:"Prof. John WIlliams Otoo", Action: "..."
},
  {indx: 24, Department_Name: "Dpartment of Mining Engineering", Number_Programs: 10, 
  Number_Students: 200, Number_Lecturers: 200, HOD_Name:"Prof. John WIlliams Otoo", Action: "..."
},
  {indx: 25, Department_Name: "Dpartment of Mining Engineering", Number_Programs: 10, 
  Number_Students: 200, Number_Lecturers: 200, HOD_Name:"Prof. John WIlliams Otoo", Action: "..."
},
  {indx: 26, Department_Name: "Dpartment of Mining Engineering", Number_Programs: 10, 
  Number_Students: 200, Number_Lecturers: 200, HOD_Name:"Prof. John WIlliams Otoo", Action: "..."
},
  {indx: 27, Department_Name: "Dpartment of Mining Engineering", Number_Programs: 10, 
  Number_Students: 200, Number_Lecturers: 200, HOD_Name:"Prof. John WIlliams Otoo", Action: "..."
},
  {indx: 28, Department_Name: "Dpartment of Mining Engineering", Number_Programs: 10, 
  Number_Students: 200, Number_Lecturers: 200, HOD_Name:"Prof. John WIlliams Otoo", Action: "..."
},
  {indx: 29, Department_Name: "Dpartment of Mining Engineering", Number_Programs: 10, 
  Number_Students: 200, Number_Lecturers: 200, HOD_Name:"Prof. John WIlliams Otoo", Action: "..."
},
  {indx: 30, Department_Name: "Dpartment of Mining Engineering", Number_Programs: 10, 
  Number_Students: 200, Number_Lecturers: 200, HOD_Name:"Prof. John WIlliams Otoo", Action: "..."
},
 ]

  columnsToDisplay = ['indx', 'Department_Name', 'Number_Programs', "Number_Students"  ,"Number_Lecturers", "HOD_Name","Action"];

  dataSource = new MatTableDataSource<any>(this.myDataArray);

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
indexof: any;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }



}