import { Component, OnInit } from '@angular/core';
import { MainMenuConst } from './main-menu.const';
import { IMMLink } from './mmlink.interface';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  mainMenuItems: Array<IMMLink>;

  constructor() {
    this.mainMenuItems = MainMenuConst;
  }

  ngOnInit(): void {
  }

}
