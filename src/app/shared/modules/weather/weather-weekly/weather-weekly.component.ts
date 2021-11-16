import { Component, Input, OnInit } from '@angular/core';
import { apiConfig } from '../../../../app.confg';

@Component({
  selector: 'app-weather-weekly',
  templateUrl: './weather-weekly.component.html',
  styleUrls: ['./weather-weekly.component.scss']
})
export class WeatherWeeklyComponent implements OnInit {

  @Input() city: string;
  @Input() unitMeasure: string;

  measureOfTemp: string;

  constructor() {
    this.city = '';
    this.unitMeasure = '';
    this.measureOfTemp = '';
  }

  ngOnInit(): void {
    const measurementUnits = apiConfig.measurementUnits['metric'];

    this.measureOfTemp = measurementUnits.temperature;
  }

}
