import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import * as moment from 'jalali-moment';
import { CoreService } from 'src/app/core/service/core.service';
@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
})
export class FormCreateComponent implements OnInit {

  registrationForm!: FormGroup;
  dynamicFormArray: any;
  constructor(
    private fb: FormBuilder,
    public coreService: CoreService
  ) {
  }


  ngOnInit(): void {
    this.registrationForm = this.fb.group({});
  }

  public changeYear() {
    this.dynamicFormArray = this.coreService.getForm();
    this.createFormControl();
  }


  createFormControl() {
    this.registrationForm.reset();
    this.dynamicFormArray.forEach((element: { Required: boolean; ID: string; }) => {
      if (element.Required) {
        this.registrationForm.addControl(element.ID, new FormControl('', Validators.required));
      } else {
        this.registrationForm.addControl(element.ID, new FormControl(''));
      }
      this.registrationForm.addControl(element.ID, new FormControl(''));
    });

  }

  onSubmit() {
    let x: any;
    this.dynamicFormArray.forEach((el: { ID: string }) => {
      console.log(this.registrationForm.get(`${el.ID}`)?.value, 'sardar azmoon');
     x = el;
      this.registrationForm.get(`${el.ID}`)?.value;
      this.coreService.postForm(x);
    })
    this.registrationForm.reset();
  }


  public DateChange(event: any, dateInput: any, picker: any) {
    const faDate = dateInput.value;
    moment.locale('fa');
    const enDateMomentFormat = moment(faDate).locale('en');
    const enDate = new Date(enDateMomentFormat.toLocaleString());
    picker._validSelected = enDate;
    picker.startAt = enDate;
  }
}
