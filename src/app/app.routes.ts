import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from '../pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'get-involved',
    loadComponent: () =>
      import('../pages/get-involved/get-involved.component').then(
        (m) => m.GetInvolvedComponent
      ),
  },
];
