import { Component } from '@angular/core';
import { NewsService } from './news.service';
import { Observable } from 'rxjs';
import { NewsState } from './news.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  imports: [CommonModule],
})
export class NewsComponent {
  state$: Observable<NewsState>;

  constructor(private newsService: NewsService) {
    this.state$ = newsService.getState();
  }

  ngOnInit() {
    this.newsService.loadNews();
  }

  showImage(figure: any) {
    figure.style.display = 'block';
  }

  navigateToNews(url: string) {
    window.open(url, '_blank');
  }
}
