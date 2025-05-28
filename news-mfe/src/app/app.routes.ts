import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./news/news.module').then((m) => m.NewsModule),
  },
];
