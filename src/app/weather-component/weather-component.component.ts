import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weater-api.service';

@Component({
  selector: 'app-weather-component',
  templateUrl: './weather-component.component.html',
  styleUrls: ['./weather-component.component.scss'],
  providers: [WeatherService]
})
export class WeatherComponentComponent implements OnInit {
  weather;
  constructor(weatherService: WeatherService) { 
    this.weather = weatherService.getWeather();
   }

  ngOnInit(): void {
  }

}
