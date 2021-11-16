import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { IWeather } from '../../interfaces/weather.interface';
import { appConfig } from '../../../app.confg';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  private _weatherSubscription: any;
  weather: IWeather;
  unitMeasure: string;

  constructor(private weatherService: WeatherService, public appService: AppService) {
    this.unitMeasure = this.appService.getUnit();
    this.weather = {
      name: '',
    };
  }

  ngOnInit(): void {
    this._weatherSubscription =
      this.weatherService
        .getWeatherByCity(appConfig.defaultCity.name)
        .subscribe((weather: any) => {
          this.weather = weather;
          console.log(this.weather);
        });
  }

  ngOnDestroy(): void {
    this._weatherSubscription.unsubscribe();
  }

}
