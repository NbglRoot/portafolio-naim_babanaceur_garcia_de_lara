import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () =>
      import('./es/pages/inicio/inicio.component').then(
        (c) => c.InicioComponent
      ),
  },
  {
    path: 'sobre-mi',
    loadComponent: () =>
      import('./es/pages/sobre-mi/sobre-mi.component').then(
        (c) => c.SobreMiComponent
      ),
  },
  {
    path: 'proyectos',
    loadComponent: () =>
      import('./es/pages/proyectos/proyectos.component').then(
        (c) => c.ProyectosComponent
      ),
  },
  {
    path: 'contactarme',
    loadComponent: () =>
      import('./es/pages/contactame/contactame.component').then(
        (c) => c.ContactameComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
];
