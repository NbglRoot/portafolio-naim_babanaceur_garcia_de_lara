import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    },
    {
        path: 'inicio',
        loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)
    },
    {
        path: 'sobre-mi',
        loadComponent: () => import('./pages/about-me/about-me.component').then(c => c.AboutMeComponent)
    },
    {
        path: 'contacto',
        loadComponent: () => import('./pages/contact/contact.component').then(c => c.ContactComponent)
    },
    {
        path: 'proyectos',
        loadComponent: () => import('./pages/projects/projects.component').then(c => c.ProjectsComponent)
    },

    // ENGLISH VERSION //
    {
        path: 'en/home',
        loadComponent: () => import('./en/pages/home/home.component').then(c => c.HomeComponent)
    },
    {
        path: 'en/about-me',
        loadComponent: () => import('./en/pages/about-me/about-me.component').then(c => c.AboutMeComponent)
    },
    {
        path: 'en/contact-me',
        loadComponent: () => import('./en/pages/contact/contact.component').then(c => c.ContactComponent)
    },
    {
        path: 'en/projects',
        loadComponent: () => import('./en/pages/projects/projects.component').then(c => c.ProjectsComponent)
    },
    {
        path: '**',
        redirectTo: 'inicio'
    }
];
