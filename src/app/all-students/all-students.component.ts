import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule, MatTableDataSource } from '@angular/material/table'; 
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {RouterLink,  RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-all-students',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatTableModule, MatPaginatorModule, RouterLink],
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css', '../all-faculties/all-faculties.component.css']
})

export class  AllStudentsComponent {
  pageSizeOptions = [5, 10, 20, 25, 30];
  pageSize = this.pageSizeOptions[0];

 myDataArray=[
  {indx: 1, Student_id: "UMAT20021", Student_name: "Emmanuel Darkoh", Course: "Bachelor of Science in Mining Engineering", Level: 100,
  Type: "Regular", Action: "..."},
  {indx: 2, Student_id: "UMAT20021", Student_name: "Emmanuel Darkoh", Course: "Bachelor of Science in Mining Engineering", Level: 100,
  Type: "Fee Paying", Action: "..."},
  {indx: 3, Student_id: "UMAT20021", Student_name: "Emmanuel Darkoh", Course: "Bachelor of Science in Mining Engineering", Level: 100,
  Type: "International", Action: "..."},
  {indx: 1, Student_id: "UMAT20021", Student_name: "Emmanuel Darkoh", Course: "Bachelor of Science in Mining Engineering", Level: 100,
  Type: "Regular", Action: "..."},
  {indx: 2, Student_id: "UMAT20021", Student_name: "Emmanuel Darkoh", Course: "Bachelor of Science in Mining Engineering", Level: 100,
  Type: "Fee Paying", Action: "..."},
  {indx: 3, Student_id: "UMAT20021", Student_name: "Emmanuel Darkoh", Course: "Bachelor of Science in Mining Engineering", Level: 100,
  Type: "International", Action: "..."},
  {indx: 1, Student_id: "UMAT20021", Student_name: "Emmanuel Darkoh", Course: "Bachelor of Science in Mining Engineering", Level: 100,
  Type: "Regular", Action: "..."},
  {indx: 2, Student_id: "UMAT20021", Student_name: "Emmanuel Darkoh", Course: "Bachelor of Science in Mining Engineering", Level: 100,
  Type: "Fee Paying", Action: "..."},
  {indx: 3, Student_id: "UMAT20021", Student_name: "Emmanuel Darkoh", Course: "Bachelor of Science in Mining Engineering", Level: 100,
  Type: "International", Action: "..."},
  {indx: 1, Student_id: "UMAT20021", Student_name: "Emmanuel Darkoh", Course: "Bachelor of Science in Mining Engineering", Level: 100,
  Type: "Regular", Action: "..."},
 ]

  columnsToDisplay = ['indx', 'Student_id', 'Student_name', "Course", "Level", "Type","Action"];

  dataSource = new MatTableDataSource<any>(this.myDataArray);

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
indexof: any;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }



}