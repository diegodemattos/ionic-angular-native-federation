import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './countries.routes';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class CountriesModule {}
