import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './countries.routes';

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesModule {}
