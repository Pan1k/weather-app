import { Component, Input, OnInit } from '@angular/core';
import { apiConfig } from '../../../../app.confg';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-weekly',
  templateUrl: './weather-weekly.component.html',
  styleUrls: ['./weather-weekly.component.scss']
})
export class WeatherWeeklyComponent implements OnInit {

  @Input() city: string;
  @Input() unitMeasure: string;

  measureOfTemp: string;
  weekWeather: any;

  constructor(private weatherService: WeatherService) {
    this.city = '';
    this.unitMeasure = '';
    this.measureOfTemp = '';
    this.weekWeather = weatherService.getWeatherForWeekByCity(this.city);
  }

  ngOnInit(): void {
    const measurementUnits = apiConfig.measurementUnits['metric'];

    this.measureOfTemp = measurementUnits.temperature;
    console.log('weather weekly', this.weekWeather);
  }

}
