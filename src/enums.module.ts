import { NgModule } from "@angular/core";
import { EnumsPipe } from "./enums.pipe";


@NgModule({
  declarations: [
    EnumsPipe
  ],
  exports: [
    EnumsPipe
  ]
})


export class EnumsModule {}
