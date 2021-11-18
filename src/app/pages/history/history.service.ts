import { Injectable } from '@angular/core';
import { apiConfig } from '../../app.confg';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMeasureUnit } from '../../shared/interfaces/measure.interface';
import { AppService } from '../../shared/services/app.service';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  measureUnit: string;

  constructor(private httpClient: HttpClient, private appService: AppService) {
    this.measureUnit = appService.getUnit();
  }

  getHistoryWeather(city: string): Observable<any> {
      return this.httpClient.get(
        `${apiConfig.host}/onecall/timemachine?q=${city}&appid=${apiConfig.appId}&units=${this.measureUnit}&cnt=${apiConfig.amountForecastDays}`);
  }
}
