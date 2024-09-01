import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((a) => a.HomeComponent),
  },
  {
    path: 'mods',
    loadComponent: () =>
      import('./pages/mods-tracker/mods-tracker.component').then((a) => a.ModsTrackerComponent),
  }
];
