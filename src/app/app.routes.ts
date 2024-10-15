import { Routes } from '@angular/router';
import { HomeComponent } from './pages/clients/home/home.component';
import { NavbarComponent } from './pages/clients/navbar/navbar.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'navbar',
        component: NavbarComponent
    },
    {
        path: 'home',
        component: HomeComponent
    }
];
