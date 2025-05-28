import { Routes } from '@angular/router';
import { AppMenuComponent } from './app-menu.component';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: '',
    component: AppMenuComponent,
  },
  {
    path: 'weather',
    loadChildren: () =>
      loadRemoteModule('weather-mfe', './WeatherModule').then(
        (m) => m.WeatherModule
      ),
  },
  {
    path: 'news',
    loadChildren: () =>
      loadRemoteModule('news-mfe', './NewsModule').then(
        (m) => m.NewsModule
      ),
  },
];
