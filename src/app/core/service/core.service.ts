import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const inputData = [
  {
    ID: 'FirstName',
    Label: 'First Name',
    Type: 'input',
    Value: '',
    Required: true
  },
  {
    ID: 'LastName',
    Label: 'Last Name',
    Type: 'input',
    Value: '',
    Required: true
  },
  {
    ID: 'MobileNo',
    Label: 'Mobile No',
    Type: 'input',
    Value: '',
    Required: true
  },

  {
    ID: 'DOB',
    Label: 'Date Of Birthday',
    Type: 'date',
    Value: '',
    Required: true
  }, {
    ID: 'EmailId',
    Label: 'Email',
    Type: 'input',
    Value: '',
    Required: true
  },
  {
    ID: 'Gender',
    Label: 'Gender',
    Type: 'radio',
    Value: 'Male,Female',
    Required: true
  }, {
    ID: 'Address',
    Label: 'Address',
    Type: 'input',
    Value: '',
    Required: true
  },

  {
    ID: 'State',
    Label: 'State',
    Type: 'select',
    Value: 'rey, shahriar, firoozkoh, andisheh,'
  }, {
    ID: 'Address',
    Label: 'Address',
    Type: 'input',
    Value: '',
    Required: true
  },
  {
    ID: 'City',
    Label: 'City',
    Type: 'select',
    Value: 'Tehran, Shiraz, Esfahan, Kish, Rasht, Karaj',
    Required: true
  },
  {
    ID: 'State',
    Label: 'State',
    Type: 'select',
    Value: 'rey, shahriar, firoozkoh, andisheh,',
    Required: true
  }
];
const postData: Object[] = [];
@Injectable({
  providedIn: 'root'
})


export class CoreService {

  constructor(public httpClient: HttpClient) {

  }
  baseURL = '../../../assets/DynamicFormControl2008.json';

  getForm() {
    // get of http
    const elementArr = [];
    const i = 2008 + Math.floor(Math.random() * 13);
    for (let index = 2008; index <= i; index++) {
      elementArr.push(this.pickItem());
    }
    return elementArr;
  }
  pickItem() {
    const i = 0 + Math.floor(Math.random() * inputData.length);
    return inputData[i];
  }
  postForm(data: Object) {
    //post method of http
    postData.push( data ) ;
}
}
