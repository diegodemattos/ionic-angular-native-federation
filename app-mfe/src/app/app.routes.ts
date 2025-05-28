import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./app-menu/app-menu.module').then((m) => m.AppMenuModule),
  },
];
