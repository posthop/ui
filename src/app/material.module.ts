import {NgModule} from "@angular/core";
import {MatButtonModule, MatRippleModule} from "@angular/material";

const mat = [
  MatRippleModule,
  MatButtonModule
];


@NgModule({
  imports: mat,
  exports: mat
})
export class MaterialModule {
}