import { Routes } from '@angular/router';
import { AuthComponent } from './authentication/auth/auth.component';
import { LoginComponent } from './authentication/auth/login/login.component';
import { FrgtPasswordComponent } from './authentication/auth/frgt-password/frgt-password.component';
export const routes: Routes = [
    {path: '', redirectTo: '/auth', pathMatch:'full'},
    {path: 'auth', component: AuthComponent,
     children: [
        {path: '', redirectTo: '/auth/login', pathMatch:'full'},
        {path: 'login', component: LoginComponent},
        {path: 'forgot-password', component: FrgtPasswordComponent}
     ]
    }
];
