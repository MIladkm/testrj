import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormSelectComponent} from './form-select/form-select.component';
import {FormCreateComponent} from './form-create/form-create.component';
import {FormListComponent} from './form-list/form-list.component';

const routes: Routes = [
  // {path: '' , component: FormSelectComponent },
  {path: '', component: FormCreateComponent},
  {path: 'form-list', component: FormListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormGeneratorRoutingModule { }
