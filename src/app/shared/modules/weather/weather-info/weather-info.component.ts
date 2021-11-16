import { Component, Input, OnInit } from '@angular/core';
import { IWeather } from '../../../interfaces/weather.interface';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss']
})
export class WeatherInfoComponent implements OnInit {

  @Input() weather: IWeather;

  constructor() {
    this.weather = {
      name: ''
    }
  }

  ngOnInit(): void {
  }

}
