import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ShipComponent} from "../ship/ship.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RetrieveComponent} from "../retrieve/retrieve.component";
import {CourierComponent} from "../courier/courier.component";

@NgModule({
  declarations: [
    AppComponent,
    RetrieveComponent,
    DashboardComponent,
    ShipComponent,
    CourierComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
