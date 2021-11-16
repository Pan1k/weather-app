import { Injectable } from '@angular/core';
import { LocalStorageService } from './localstorage.service';
import { appConfig } from '../../app.confg';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  unitMeasure: string;

  constructor(private localStorageService: LocalStorageService) {
    this.unitMeasure = localStorageService.get('unit') || appConfig.defaultUnit;
  }

  getUnit(): string {
    return this.unitMeasure;
  }

  updateUnit(unitMeasure: string): void {
    this.localStorageService.set('unit', unitMeasure);

    setTimeout(() => window.location.reload(), 300);
  }

}
