import { Component, OnInit, Input } from '@angular/core';
import { IWeatherFormated } from '../../../interfaces/weather.interface';
import { apiConfig } from '../../../../app.confg';
import { WEATHER_FORMATED } from '../../../objects/weather.object';

interface IUnits {
  temperature: string;
  windSpeed: string;
  pressure: string;
}

@Component({
  selector: 'app-weather-daily',
  templateUrl: './weather-daily.component.html',
  styleUrls: ['./weather-daily.component.scss']
})
export class WeatherDailyComponent implements OnInit {

  @Input() weather: IWeatherFormated;
  @Input() unitMeasure: string;

  measureOfTemp: string;
  measureOfWindSpeed: string;
  measureOfPressure: string;

  constructor() {
    this.measureOfTemp = '';
    this.measureOfWindSpeed = '';
    this.measureOfPressure = '';
    this.unitMeasure = '';
    this.weather = WEATHER_FORMATED;
  }

  ngOnInit() {
    const measurementUnits = apiConfig.measurementUnits['metric'];

    this.measureOfTemp = measurementUnits.temperature;
    this.measureOfWindSpeed = measurementUnits.windSpeed;
    this.measureOfPressure = measurementUnits.pressure;
  }

}
