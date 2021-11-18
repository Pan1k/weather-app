import { Injectable } from '@angular/core';
import { apiConfig, appConfig } from '../../../app.confg';
import { AppService } from '../../services/app.service';
import { HttpClient } from '@angular/common/http';
import { IWeatherFormated } from '../../interfaces/weather.interface';
import { HelperService } from '../../services/helper.service';
import { WEATHER_FORMATED } from '../../objects/weather.object';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private unitMeasure: string;
  private currentWeatherTimestamp: number;

  weather: IWeatherFormated;

  constructor(
    private appService: AppService,
    private httpClient: HttpClient,
    private helperService: HelperService
  ) {
    this.unitMeasure = this.appService.getUnit();
    this.currentWeatherTimestamp = 0;
    this.weather = WEATHER_FORMATED;
  }

  ngOnInit() {
    console.log(this.unitMeasure);
  }

  handleResponseWeatherData(responseData: any): IWeatherFormated {
    const { name, main, weather, wind, sys, dt } = responseData;
    console.log(responseData);

    this.currentWeatherTimestamp = dt;

    const updateAt = new Date().getTime();
    //const iconClassname = this.weatherIconsService.getIconClassNameByCode(weather[0].id, sys.sunset);
    const temperature = Math.round(main.temp);
    const pressureInHpa = Math.round(main.pressure);
    const pressure = (this.unitMeasure === appConfig.defaultUnit) ?
      this.helperService.getPressureInMmHg(pressureInHpa) :
      pressureInHpa;
    const windDegrees = Math.round(wind.deg);
    const windDirection = this.helperService.getWindDirection(windDegrees);
    const windBeaufortScale = this.helperService.getWindBeaufortScaleByMeterInSecond(wind.speed);
    const sunriseTime = sys.sunrise * 1000;
    const sunsetTime = sys.sunset * 1000;

    return {
      updateAt,
      city: name,
      temp: temperature,
      humidity: main.humidity,
      pressure,
      description: weather[0].description,
      sunrise: sunriseTime,
      sunset: sunsetTime,
      windDirection,
      windSpeed: wind.speed,
      windBeaufortScale
    }
  }

  getWeatherByCity(city: string): Observable<any> {
    return this.httpClient.get(`${apiConfig.host}/weather?appid=${apiConfig.appId}&q=${city}&units=${this.unitMeasure}`);
  }

  getWeatherForWeekByCity(city: string): Observable<any> {
    return this.httpClient.get(`${apiConfig.host}/weather?appid=${apiConfig.appId}&q=${city}&units=${this.unitMeasure}`);
  }

}
