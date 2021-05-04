import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralRoutingModule } from './general-routing.module';
import { GeneralComponent } from './general/general.component';
import {FormGeneratorModule} from '../form-generator/form-generator.module';


@NgModule({
  declarations: [
    GeneralComponent
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule,
    FormGeneratorModule
  ]
})
export class GeneralModule { }
