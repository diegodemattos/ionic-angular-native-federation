import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          loadRemoteModule('app-mfe', './AppMenuModule').then(
            (m) => m.AppMenuModule
          ),
      },
    ],
  },
];
