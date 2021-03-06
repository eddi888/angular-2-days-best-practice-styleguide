import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PlanetsListComponent } from './planets-list/planets-list.component';
import { PlanetsDetailComponent } from './planets-detail/planets-detail.component';

import { PlanetsService } from './shared';

import {
  LightMinutesPipe
} from './planets-list/shared';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsListComponent,
    PlanetsDetailComponent,

    LightMinutesPipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    PlanetsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
