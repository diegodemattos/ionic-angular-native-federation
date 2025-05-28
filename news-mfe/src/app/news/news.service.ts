import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { NewsState } from './news.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class NewsService {
  private state: BehaviorSubject<NewsState>;

  constructor(private httpClient: HttpClient) {
    this.state = new BehaviorSubject({
      news: [],
      loading: false,
      error: null,
    } as NewsState);
  }

  loadNews() {
    this.state.next({
      ...this.state.value,
      news: [],
      loading: true,
      error: null,
    });
    Geolocation.getCurrentPosition()
      .then(({ coords }) => {
        this.httpClient
          .get(
            `https://api.worldnewsapi.com/search-news?language=pt&location-filter=${coords.latitude},${coords.longitude},50&api-key=301b76952be84db8b6c1c80c52af4dd9`
          )
          .subscribe({
            next: (response: any) => {
              this.state.next({
                ...this.state.value,
                news: response.news.map((news: any) => ({
                  title: news.title,
                  summary: news.summary,
                  url: news.url,
                  image: news.image
                })),
                loading: false,
                error: null,
              });
            },
            error: () => {
              this.state.next({
                ...this.state.value,
                news: [],
                loading: false,
                error: 'Error loading the news.',
              });
            },
          });
      })
      .catch(() => {
        this.state.next({
          ...this.state.value,
          news: [],
          loading: false,
          error: 'Error retrieving location.',
        });
      });
  }

  getState(): Observable<NewsState> {
    return this.state.asObservable();
  }
}
