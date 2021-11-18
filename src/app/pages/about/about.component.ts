import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  title: string;
  description: string;
  sourceResources: Array<any>;
  youCanSeeText: string;

  constructor() {
    this.title = 'About';
    this.description = 'This application is for showing weather for today in Kyiv.';
    this.sourceResources = [
      { link: 'https://github.com/Pan1k/weather-app', title: 'GitHub' },
      { link: 'https://stackblitz.com/edit/angular-ivy-f4xudk', title: 'Stackblitz' },
    ]
    this.youCanSeeText = 'You can see source code at resources:';
  }

  ngOnInit(): void {
  }

}
