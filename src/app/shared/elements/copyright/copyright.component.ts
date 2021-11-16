import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright',
  template: '<p class="copyright">{{copyrightText}}</p>',
  styleUrls: ['./copyright.component.scss']
})
export class CopyrightComponent implements OnInit {

  copyrightText: string;

  constructor() {
    this.copyrightText = 'Developed by Alexander Katerinich';
  }

  ngOnInit(): void {
  }

}
