import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormGeneratorRoutingModule } from './form-generator-routing.module';
import { FormCreateComponent } from './form-create/form-create.component';
import { FormListComponent } from './form-list/form-list.component';
import { FormSelectComponent } from './form-select/form-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    FormCreateComponent,
    FormListComponent,
    FormSelectComponent,
  ],
  imports: [
    CommonModule,
    FormGeneratorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatChipsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatRadioModule,
    MatCardModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  exports: [
  ],
  entryComponents: [
    FormSelectComponent
  ]
})
export class FormGeneratorModule { }
