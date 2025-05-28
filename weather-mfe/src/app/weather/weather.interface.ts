export interface Weather {
  location: string;
  time: string;
  condition: string;
  conditionIcon: string;
  temperature: string;
  feelsLike: string;
  uvIndex: string;
  wind: string;
  pressure: string;
  precipitation: string;
  humidity: string;
  cloudCover: string;
  dewPoint: string;
  heatIndex: string;
  visibiity: string;
  lastUpdated: string;
  timeZone: string;
  coordinates: string;
}

export interface WeatherState {
  weather: Weather | null;
  loading: boolean;
  error: string | null;
}
