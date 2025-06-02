import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { SHARED_DATA_PROVIDER } from 'state-lib'
import { environment } from './environments/environment';
import { provideServiceWorker } from '@angular/service-worker';

bootstrapApplication(AppComponent, {
  providers: [
    ...(environment.production ? [provideServiceWorker('ngsw-worker.js')] : []),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    {
      provide: SHARED_DATA_PROVIDER,
      useValue: {
        APP_NAME: 'Ionic Angular Native Federation'
      }
    }
  ],
});
