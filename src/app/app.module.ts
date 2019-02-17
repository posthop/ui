import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {ShipComponent} from "../ship/ship.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RetrieveComponent} from "../retrieve/retrieve.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./material.module";
import {QrInputComponent} from "../retrieve/input/qr/qr.component";
import {TrackingInputComponent} from "../retrieve/input/tracking/tracking.component";
import {DriverComponent} from "../retrieve/driver/driver.component";

@NgModule({
  declarations: [
    AppComponent,
    RetrieveComponent,
    DashboardComponent,
    ShipComponent,

    QrInputComponent,
    TrackingInputComponent,
    DriverComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
