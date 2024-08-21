import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'mods',
    pathMatch: 'full'
  },
  {
    path: 'mods',
    loadComponent: () =>
      import('./pages/mods-tracker/mods-tracker.component').then((a) => a.ModsTrackerComponent),
  }
];
