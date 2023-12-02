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
children: [{path: '', component: DshContentComponent, title: "dashboard"}, 
{path: 'faculties/add', component: FocultiesComponent, title: "Add faculty"},
{path: 'departments/add', component: AddDepartmentComponent, title: "Add departments"},
  
]},
    {path: "**", component: WildcardComponent, title: '404'}
];
