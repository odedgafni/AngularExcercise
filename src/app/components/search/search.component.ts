import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() searchEvent = new EventEmitter<string>()

  inputVal: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  handleSearch() {
    this.searchEvent.emit(this.inputVal)
  }

}
