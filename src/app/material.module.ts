import {NgModule} from "@angular/core";
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule} from "@angular/material";

const mat = [
  MatRippleModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
];


@NgModule({
  imports: mat,
  exports: mat
})
export class MaterialModule {
}