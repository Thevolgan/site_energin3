import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChargerStationComponent } from './charger-station/charger-station.component';
import { SubstationComponent } from './substation/substation.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'chargerStation', component: ChargerStationComponent},
  {path: 'substation', component: SubstationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
