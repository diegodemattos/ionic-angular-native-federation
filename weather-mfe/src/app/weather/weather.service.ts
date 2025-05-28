import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Weather, WeatherState } from './weather.interface';
import { Geolocation } from '@capacitor/geolocation';

@Injectable()
export class WeatherService {
  private state: BehaviorSubject<WeatherState>;

  constructor(private httpClient: HttpClient) {
    this.state = new BehaviorSubject({
      weather: null,
      loading: false,
      error: null,
    } as WeatherState);
  }

  loadWeather() {
    this.state.next({
      ...this.state.value,
      weather: null,
      loading: true,
      error: null,
    });
    Geolocation.getCurrentPosition()
      .then(({ coords }) => {
        console.log(coords);
        this.httpClient
          .get(
            `https://api.weatherapi.com/v1/current.json?key=e587043fdd174c4fa0b180415252805&q=${coords.latitude},${coords.longitude}&lang=pt`
          )
          .subscribe({
            next: (response: any) => {
              const weather: Weather = {
                location: `${response.location.name}, ${response.location.region}, ${response.location.country}`,
                time: response.location.localtime,
                condition: response.current.condition.text,
                conditionIcon: response.current.condition.icon,
                temperature: response.current.temp_c,
                feelsLike: response.current.feelslike_c,
                uvIndex: response.current.uv,
                wind: response.current.wind_kph,
                pressure: response.current.pressure_mb,
                precipitation: response.current.precip_mm,
                humidity: response.current.humidity,
                cloudCover: response.cloud,
                dewPoint: response.current.dewpoint_c,
                heatIndex: response.current.headindex_c,
                visibiity: response.current.vis_km,
                lastUpdated: response.current.last_updated,
                timeZone: response.location.tz_id,
                coordinates: `${response.location.lat}, ${response.location.lon}`
              }
              this.state.next({
                ...this.state.value,
                weather,
                loading: false,
                error: null,
              });
            },
            error: () => {
              this.state.next({
                ...this.state.value,
                weather: null,
                loading: false,
                error: 'Error retrieving weather data.',
              });
            },
          });
      })
      .catch(() => {
        this.state.next({
          ...this.state.value,
          weather: null,
          loading: false,
          error: 'Error retrieving location.',
        });
      });
  }

  getState(): Observable<WeatherState> {
    return this.state.asObservable();
  }
}
