import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RetrieveComponent} from '../retrieve/retrieve.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {ShipComponent} from '../ship/ship.component';
import {DriverComponent} from "../retrieve/driver/driver.component";

const routes: Routes = [
  {path: 'ship', component: ShipComponent},
  {path: 'retrieve', component: RetrieveComponent},
  {path: '', component: DashboardComponent},
  {path: 'retrieve/driver', component: DriverComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
