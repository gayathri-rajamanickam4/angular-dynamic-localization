import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  param = {value: 'Q2 LTMS', browserLang: 'DEFAULT'};
  translater: TranslateService;

  constructor(translater: TranslateService) {
    this.translater = translater;
  }

  ngOnInit() {
    this.param.browserLang = this.translater.getBrowserLang();

    this.translater.addLangs(['en', 'de']);
    this.translater.setDefaultLang('en');
    this.translater.use('en');
  }
}
