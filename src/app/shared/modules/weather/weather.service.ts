import { Injectable } from '@angular/core';
import { apiConfig } from '../../../app.confg';
import { AppService } from '../../services/app.service';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  unitMeasure: string;

  constructor(
    private appService: AppService,
    private httpClient: HttpClient
  ) {
    this.unitMeasure = this.appService.getUnit();
  }

  ngOnInit() {
    console.log(this.unitMeasure);
  }

  getWeatherByCity(city: string): Observable<any> {
    return this.httpClient.get(`${apiConfig.host}/weather?appid=${apiConfig.appId}&q=${city}&units=${this.unitMeasure}`);
  }

}
