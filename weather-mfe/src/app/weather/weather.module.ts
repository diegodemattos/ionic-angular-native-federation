import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './weather.routes';
import { WeatherService } from './weather.service';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [provideHttpClient(withInterceptorsFromDi()), WeatherService],
})
export class WeatherModule {}
