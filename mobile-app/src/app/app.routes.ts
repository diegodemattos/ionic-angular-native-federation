import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      loadRemoteModule('app-mfe', './AppMenuModule').then(
        (m) => m.AppMenuModule
      ),
  }
];
