import { Routes } from '@angular/router';
import { HomeComponent } from './pages/clients/home/home.component';
import { NavbarComponent } from './pages/clients/navbar/navbar.component';
import { LoginComponent } from './pages/clients/login/login.component';
import { MenuComponent } from './pages/clients/menu/menu.component';
import { SignupComponent } from './pages/clients/signup/signup.component';
import { CartComponent } from './pages/clients/cart/cart.component';


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
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'menu',
        component: MenuComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    }
];

// const routes: Routes = [
//   { path: 'login', component: LoginComponent },
//   { path: 'signup', component: SignupComponent },
//   { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route to login
//   { path: '**', redirectTo: '/login' },
// ];
