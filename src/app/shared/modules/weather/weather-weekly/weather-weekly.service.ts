import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiConfig } from '../../../../app.confg';
import { AppService } from '../../../services/app.service';
import { Observable } from 'rxjs';
import { HelperService } from '../../../services/helper.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherWeeklyService {
  private measureUnits: string;

  constructor(
    private httpClient: HttpClient,
    private appService: AppService,
    private helperService: HelperService) {
    this.measureUnits = appService.getUnit();
  }

  handleResponseWeeklyData(responseData: any): any {
    const { dt, main, weather } = responseData;
    const date = dt * 1000;
    const temperatureDay = Math.round(main.temp_max);
    const temperatureNight = Math.round(main.temp_min);

    return {
      date,
      temperatureDay,
      temperatureNight,
      description: weather[0].description
    };
  }

  getWeatherWeeklyByCity(city: string): Observable<any> {
    return this.httpClient.get(
      `${apiConfig.host}/forecast?q=${city}&appid=${apiConfig.appId}&units=${this.measureUnits}&cnt=${apiConfig.amountForecastDays}`);
  }
}
