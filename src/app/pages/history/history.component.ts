import { Component, OnInit, OnDestroy } from '@angular/core';
import { HistoryService } from './history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  private _weatherHistorySubscription: any;
  weatherHistory: any;

  constructor(private historyService: HistoryService) {
    this._weatherHistorySubscription = historyService.getHistoryWeather('Kyiv').subscribe(weatherHistory => {
      console.log(weatherHistory);
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this._weatherHistorySubscription.unsubscribe();
  }

}
