import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '', 
        redirectTo: 'welcome', 
        pathMatch: 'full', 
       
    },
    {
        path: 'welcome',
        loadComponent: () => import('./features/welcome/welcome-page/welcome-page.component').then(m => m.WelcomePageComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('./features/about/about-page/about-page.component').then(m => m.AboutPageComponent)
    },
    {
        path: 'login',
        loadComponent: () => import('./features/auth/login-page/login-page.component').then(m => m.LoginPageComponent)
    },
    {
        path: 'register',
        loadComponent: () => import('./features/auth/register-page/register-page.component').then(m => m.RegisterPageComponent)
    },
    {
        path: 'home',
        loadComponent: () => import('./features/home/home-page/home-page.component').then(m => m.HomePageComponent)
    },
    
];
