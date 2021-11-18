import { Component, Input, OnInit } from '@angular/core';
import { IWeatherFormated } from '../../../interfaces/weather.interface';
import { WEATHER_FORMATED } from '../../../objects/weather.object';
import { apiConfig } from '../../../../app.confg';
import { IMeasureArr } from '../../../interfaces/measure.interface';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss']
})
export class WeatherInfoComponent implements OnInit {

  @Input() weather: IWeatherFormated;

  measureOfTemp: string;
  measureOfWindSpeed: string;
  measureOfPressure: string;
  unitMeasure: string = 'metric';

  constructor() {
    this.weather = WEATHER_FORMATED;

    const measurementUnits = apiConfig.measurementUnits[this.unitMeasure];
    this.measureOfTemp = measurementUnits.temperature;
    this.measureOfWindSpeed = measurementUnits.windSpeed;
    this.measureOfPressure = measurementUnits.pressure;
  }

  ngOnInit(): void {
  }

}
