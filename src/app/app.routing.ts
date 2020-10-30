import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { IPComponentComponent } from './ipcomponent/ipcomponent.component';
import { CodeComponentComponent } from './code-component/code-component.component';
import { MainPageComponentComponent } from './main-page-component/main-page-component.component';
import { TemperatureComponentComponent } from './temperature-component/temperature-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';


export const routing = RouterModule.forRoot([
    {path: '', component: IPComponentComponent},
    {path: 'Code', component: CodeComponentComponent},
    {path: 'Main', component: MainPageComponentComponent},
    {path: 'Temperature', component: TemperatureComponentComponent},
    {path: '**', component: NotFoundComponentComponent}
])