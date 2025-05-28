import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './news.routes';
import { NewsService } from './news.service';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [provideHttpClient(withInterceptorsFromDi()), NewsService],
})
export class NewsModule {}
