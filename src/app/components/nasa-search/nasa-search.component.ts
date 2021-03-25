import { Component, Input, OnInit } from '@angular/core';

import { NasaService } from '../../services/nasa.service'

@Component({
  selector: 'app-nasa-search',
  templateUrl: './nasa-search.component.html',
  styleUrls: ['./nasa-search.component.css']
})
export class NasaSearchComponent implements OnInit {

  fromDate: any;
  toDate: any;
  maxDate: Date = new Date();
  maxDateEnd: Date = new Date();
  validDate: boolean = true;

  constructor(private nasaService: NasaService) {
  }

  @Input() getAsteroids: any;

  ngOnInit(): void {
  }

  convertDate(date: Date): string {
    return date.toISOString().substring(0, 10);
  }

  adjustDateEnd(): void {
    const date = new Date(this.fromDate.getTime() + (7 * 24 * 60 * 60 * 1000));
    this.maxDateEnd = date;
  }

  onSubmit(): void {
    if (!this.fromDate || !this.toDate) {
      this.validDate = false;
    }
    else {
      const from = this.convertDate(this.fromDate);
      const to = this.convertDate(this.toDate);
      this.validDate = true;
      this.nasaService.isLoading.next(true);
      this.fromDate = null
      this.toDate = null
      this.getAsteroids(from, to)
    }
  }
}
