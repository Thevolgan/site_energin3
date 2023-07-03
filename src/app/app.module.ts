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
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CarrouselComponent } from './components/carrousel/carrousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WhoareComponent,
    SubstationComponent,
    ChargerStationComponent,
    CarrouselComponent,
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
