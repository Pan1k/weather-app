import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  HeaderComponent, FooterComponent, AuthWidgetComponent, MainMenuComponent, WeatherComponent,
  WeatherSettingsComponent, WeatherDailyComponent, WeatherWeeklyComponent, WeatherInfoComponent
} from './shared/modules';
import { HomeComponent, NotFoundComponent, AboutComponent } from './pages';
import { BrandComponent } from './shared/elements/brand/brand.component';
import { CopyrightComponent } from './shared/elements/copyright/copyright.component';
import { HistoryComponent } from './pages/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    AboutComponent,
    MainMenuComponent,
    AuthWidgetComponent,
    BrandComponent,
    CopyrightComponent,
    WeatherComponent,
    WeatherSettingsComponent,
    WeatherDailyComponent,
    WeatherWeeklyComponent,
    WeatherInfoComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
