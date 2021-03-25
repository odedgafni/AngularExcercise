import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Country } from 'src/app/models/Country';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent {

  @Input() country?: Country
  @Output() removeEvent = new EventEmitter<Country>()

  constructor() { }


  remove(value: Country) {
    this.removeEvent.emit(value)
  }

}
