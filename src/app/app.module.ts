import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WhoareComponent } from './whoare/whoare.component';
import { SubstationComponent } from './substation/substation.component';
import { ChargerStationComponent } from './charger-station/charger-station.component';
import { SaneamentComponent } from './saneament/saneament.component';
import { RouterModule } from '@angular/router';
import { SlickCarouselComponent, SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WhoareComponent,
    SubstationComponent,
    ChargerStationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
