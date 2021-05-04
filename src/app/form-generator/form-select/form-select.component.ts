import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css']
})
export class FormSelectComponent implements OnInit {
  years = [2008, 2009, 2010, 2011, 2012, 2013, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];
  @Output() newItemEvent = new EventEmitter<string>();
  ngOnInit(): void {
  }
  SendYear(e: any) {
    this.newItemEvent.emit(e.value);
  }
}
