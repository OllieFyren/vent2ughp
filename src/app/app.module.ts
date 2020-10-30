import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { IPComponentComponent } from './ipcomponent/ipcomponent.component';
import { CodeComponentComponent } from './code-component/code-component.component';
import { MainPageComponentComponent } from './main-page-component/main-page-component.component';
import { TemperatureComponentComponent } from './temperature-component/temperature-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { WeatherComponentComponent } from './weather-component/weather-component.component';
import { TempComponent } from './temp/temp.component';

@NgModule({
  declarations: [
    AppComponent,
    IPComponentComponent,
    CodeComponentComponent,
    MainPageComponentComponent,
    TemperatureComponentComponent,
    NotFoundComponentComponent,
    WeatherComponentComponent,
    TempComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
