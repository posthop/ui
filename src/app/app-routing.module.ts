import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RetrieveComponent }      from '../retrieve/retrieve.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ShipComponent } from '../ship/ship.component';

const routes: Routes = [
  { path: 'ship', component: ShipComponent },
  { path: 'retrieve', component: RetrieveComponent},
  { path: '', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
