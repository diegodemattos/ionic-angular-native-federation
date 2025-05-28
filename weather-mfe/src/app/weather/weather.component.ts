import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { WeatherState } from './weather.interface';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  imports: [CommonModule],
})
export class WeatherComponent {
  state$: Observable<WeatherState>;

  constructor(private weatherService: WeatherService) {
    this.state$ = weatherService.getState();
  }

  ngOnInit() {
    this.weatherService.loadWeather();
  }
}
