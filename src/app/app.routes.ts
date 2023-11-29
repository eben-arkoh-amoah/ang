import { Routes } from '@angular/router';
import { AuthComponent } from './authentication/auth/auth.component';
import { LoginComponent } from './authentication/auth/login/login.component';
import { FrgtPasswordComponent } from './authentication/auth/frgt-password/frgt-password.component';
import { ResetComponent } from './authentication/auth/reset/reset.component';
import { WildcardComponent } from './wildcard/wildcard.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const routes: Routes = [
    {path: '', redirectTo: '/auth', pathMatch:'full'},
    {path: 'auth', component: AuthComponent,
     children: [
        {path: '', redirectTo: '/auth/login', pathMatch:'full'},
        {path: 'login', component: LoginComponent, title: 'login'},
        {path: 'forgot-password', component: FrgtPasswordComponent, title:'forgot passowrd'},
        {path: 'reset-password', component: ResetComponent, title: 'reset password'}
     ]
    },
    {path: "dashboard", component: DashboardComponent},
    {path: "**", component: WildcardComponent, title: '404'}
];
