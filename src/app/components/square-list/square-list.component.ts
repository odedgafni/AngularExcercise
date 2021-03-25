import { Component, OnInit, ViewChild } from '@angular/core';

import { CountriesService } from '../../services/countries.service'
import { Country } from '../../models/Country'
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-square-list',
  templateUrl: './square-list.component.html',
  styleUrls: ['./square-list.component.css']
})
export class SquareListComponent implements OnInit {

  countries?: Country[];

  constructor( private countryService: CountriesService) { 

  }

  @ViewChild('searchComponent') searchComp: any

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(): void {
    this.countryService.getCountries()
      .subscribe(countries => this.countries = countries);
  }

  removeCountry(country: Country): void {
    this.countries = this.countries?.filter(c => c.numericCode !== country.numericCode);
  }

  resetCountries(): void {
    this.countries = this.countryService.countries;
    this.searchComp.inputVal = "";
  }

  handleSearch(input: string) {
    this.countries = this.countryService.filterCountries(input);
  }

}
