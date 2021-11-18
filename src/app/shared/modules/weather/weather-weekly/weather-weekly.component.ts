import { Component, Input, OnInit } from '@angular/core';
import { apiConfig, appConfig } from '../../../../app.confg';
import { WeatherWeeklyService } from './weather-weekly.service';

@Component({
  selector: 'app-weather-weekly',
  templateUrl: './weather-weekly.component.html',
  styleUrls: ['./weather-weekly.component.scss']
})
export class WeatherWeeklyComponent implements OnInit {

  @Input() unitMeasure: string;

  _weeklyWeatherSubscription: any;
  measureOfTemp: string;
  weekWeather: Array<any>;

  constructor(private weatherWeeklyService: WeatherWeeklyService) {
    this.unitMeasure = '';
    this.measureOfTemp = '';
    this.weekWeather = new Array();
  }

  ngOnInit(): void {
    const measurementUnits = apiConfig.measurementUnits['metric'];

    this.measureOfTemp = measurementUnits.temperature;
    this._weeklyWeatherSubscription =
      this.weatherWeeklyService
        .getWeatherWeeklyByCity(appConfig.defaultCity.name)
        .subscribe(weekWeather => {
          weekWeather.list.map((x: any) => {
            this.weekWeather.push(this.weatherWeeklyService.handleResponseWeeklyData(x));
          });
          console.log(this.weekWeather);
        });
    console.log('weather weekly', this.weekWeather);
  }

  ngOnDestroy(): void {
    this._weeklyWeatherSubscription.unsubscribe();
  }

}
