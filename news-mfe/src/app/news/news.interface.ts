export interface News {
  title: string;
  summary: string;
  url: string;
  image: string;
}

export interface NewsState {
  news: News[];
  loading: boolean;
  error: string | null;
}
