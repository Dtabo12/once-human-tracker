import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'mods',
    loadComponent: () =>
      import('./pages/mods-tracker/mods-tracker.component').then((a) => a.ModsTrackerComponent),
  }
];
