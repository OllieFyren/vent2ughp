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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IpInputComponent } from './ip-input/ip-input.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    IPComponentComponent,
    CodeComponentComponent,
    MainPageComponentComponent,
    TemperatureComponentComponent,
    NotFoundComponentComponent,
    WeatherComponentComponent,
    TempComponent,
    IpInputComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
