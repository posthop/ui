import {NgModule} from "@angular/core";
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatRippleModule
} from "@angular/material";

const mat = [
  MatRippleModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule
];


@NgModule({
  imports: mat,
  exports: mat
})
export class MaterialModule {
}