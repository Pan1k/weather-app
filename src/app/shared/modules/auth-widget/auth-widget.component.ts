import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-widget',
  templateUrl: './auth-widget.component.html',
  styleUrls: ['./auth-widget.component.scss']
})
export class AuthWidgetComponent implements OnInit {

  isUserAuthorized: boolean;

  constructor() {
    this.isUserAuthorized = false;
  }

  ngOnInit(): void {
  }

}
