import { Routes } from '@angular/router';
import { WelcomePageComponent } from './features/welcome/welcome-page/welcome-page.component';
import { AboutPageComponent } from './features/about/about-page/about-page.component';

export const routes: Routes = [
    {
        path: '', 
        redirectTo: 'welcome', 
        pathMatch: 'full', 
       
    },
    {
        path: 'welcome',
        component: WelcomePageComponent
    },
    {
        path: 'about',
        component: AboutPageComponent
    },

   
];
