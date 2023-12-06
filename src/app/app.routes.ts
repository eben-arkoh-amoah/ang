import { Routes } from '@angular/router';
import { AuthComponent } from './authentication/auth/auth.component';
import { LoginComponent } from './authentication/auth/login/login.component';
import { FrgtPasswordComponent } from './authentication/auth/frgt-password/frgt-password.component';
import { ResetComponent } from './authentication/auth/reset/reset.component';
import { WildcardComponent } from './wildcard/wildcard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DshContentComponent } from './dsh-content/dsh-content.component';
import { FocultiesComponent } from './foculties/foculties.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { AddProgramComponent } from './add-program/add-program.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { BasicStaffInfoComponent } from './basic-staff-info/basic-staff-info.component';
import { StaffAcntStngsComponent } from './staff-acnt-stngs/staff-acnt-stngs.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentBasicInfoComponent } from './student-basic-info/student-basic-info.component';
import { StudentAccountInfoComponent } from './student-account-info/student-account-info.component';
import { ExistingFocultiesComponent } from './existing-foculties/existing-foculties.component';
import { AllFacultiesComponent } from './all-faculties/all-faculties.component';
import { DepartmentsComponent } from './departments/departments.component';
import { AllStaffsComponent } from './all-staffs/all-staffs.component';
import { AllProgramsComponent } from './all-programs/all-programs.component';

export const routes: Routes = [
    {path: '', redirectTo: '/auth', pathMatch:'full'},
    {path: 'auth', component: AuthComponent,
     children: [
        {path: '', redirectTo: '/auth/login', pathMatch:'full'},
        {path: 'login', component: LoginComponent, title: 'login'},
        {path: 'forgot-password', component: FrgtPasswordComponent, title:'forgot passowrd'},
        {path: 'reset-password', component: ResetComponent, title: 'reset password'},
    ]
},

{path: "dashboard", component: DashboardComponent,
children: [{path: '', component: DshContentComponent, title: "dashboard",}, 
{path: 'faculties', component: ExistingFocultiesComponent, title: "Faculties",
children: [
  {path: '', redirectTo: 'all', pathMatch: 'full'},
  {path: 'all', component: AllFacultiesComponent, title: 'All faculties'},
  {path: 'departments', component: DepartmentsComponent, title: 'All departments'},
  {path: 'staffs', component: AllStaffsComponent, title: 'All Staff'},
  {path: 'programs', component: AllProgramsComponent, title: 'All programs'},
]},
{path: 'faculties/add', component: FocultiesComponent, title: "Add faculty"},

{path: 'departments/add', component: AddDepartmentComponent, title: "Add departments"},
{path: 'programs/add', component: AddProgramComponent, title: "Add program"},
{path: "staff/add", component: AddStaffComponent, title: "Add staff",
children: [
  {  path: '', redirectTo: 'basic-info', pathMatch: "full"},
  {path: 'basic-info', component: BasicStaffInfoComponent},
  {path: 'account-settings', component: StaffAcntStngsComponent},
]
},

{path: "students/add", component: AddStudentComponent, title: "Add student",
children: [
  {  path: '', redirectTo: '/dashboard/students/add/basic-info', pathMatch: "full"},
  {  path: 'basic-info', component: StudentBasicInfoComponent},
  {  path: 'account-settings', component: StudentAccountInfoComponent},
]
},
  
]},
    {path: "**", component: WildcardComponent, title: '404'}
];
