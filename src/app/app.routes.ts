import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'es/inicio',
        pathMatch: 'full'
    },

    // Spanish Routes
    {
        path: 'es/inicio',
        loadComponent: () => import('./pages/spanish/inicio/inicio.component').then( c => c.InicioComponent),
    },
    {
        path: 'es/sobre-mi',
        loadComponent: () => import('./pages/spanish/sobre-mi/sobre-mi.component').then( c => c.SobreMiComponent),
    },
    {
        path: 'es/contacta-me',
        loadComponent: () => import('./pages/spanish/contacta-me/contacta-me.component').then( c => c.ContactaMeComponent),
    },
    {
        path: 'es/proyectos',
        loadComponent: () => import('./pages/spanish/proyectos/proyectos.component').then( c => c.ProyectosComponent),
    },

    // English Routes
    {
        path: 'en/home',
        loadComponent: () => import('./pages/english/home/home.component').then( c => c.HomeComponent),
    },
    {
        path: 'en/about-me',
        loadComponent: () => import('./pages/english/about-me/about-me.component').then( c => c.AboutMeComponent),
    },
    {
        path: 'en/contact-me',
        loadComponent: () => import('./pages/english/contact-me/contact-me.component').then( c => c.ContactMeComponent),
    },
    {
        path: 'en/projects',
        loadComponent: () => import('./pages/english/projects/projects.component').then( c => c.ProjectsComponent),
    },

    // General Route
    {
        path: '**',
        redirectTo: 'es/inicio',
        pathMatch: 'full'
    }
];
