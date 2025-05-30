import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { SHARED_DATA_PROVIDER } from 'state-lib';

export const appConfig: ApplicationConfig = {
  providers: [
    provideIonicAngular(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    {
      provide: SHARED_DATA_PROVIDER,
      useValue: {
        APP_NAME: 'Countries MFE'
      }
    }
  ],
};
