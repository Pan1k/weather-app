import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { IWeatherFormated } from '../../interfaces/weather.interface';
import { appConfig } from '../../../app.confg';
import { AppService } from '../../services/app.service';
import { WEATHER_FORMATED } from '../../objects/weather.object';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  private _weatherSubscription: any;
  weather: IWeatherFormated;
  unitMeasure: string;

  constructor(private weatherService: WeatherService, public appService: AppService) {
    this.unitMeasure = this.appService.getUnit();
    this.weather = WEATHER_FORMATED;
  }

  ngOnInit(): void {
    this._weatherSubscription =
      this.weatherService
        .getWeatherByCity(appConfig.defaultCity.name)
        .subscribe((weather: any) => {
          this.weather = this.weatherService.handleResponseWeatherData(weather);
          console.log(this.weather);
        });
  }

  ngOnDestroy(): void {
    this._weatherSubscription.unsubscribe();
  }

}
