import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { RacesComponent } from './components/races/races.component';
import { CarsComponent } from './components/cars/cars.component';
import { AuthComponent } from './auth/auth.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'drivers', component: DriversComponent },
  { path: 'races', component: RacesComponent },
  { path: 'cars', component: CarsComponent },
  { path:'auth',component:AuthComponent}
  // { path: '**', redirectTo: '' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
