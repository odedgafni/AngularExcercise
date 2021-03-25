import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';

import { Country } from '../models/Country'

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  countries: Country[] = [];

  private url: string = 'https://restcountries.eu/rest/v2/all';

  constructor( private http: HttpClient ) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.url).pipe(
      tap(countries => this.countries = countries),
      catchError(this.handleError())
    )
  }

  filterCountries(input: string): Country[] {
    const regex = new RegExp(`^${input.trim()}`, 'i');
    return this.countries.filter(c => c.name.match(regex));
  }

  handleError() {
    return (error: any): Observable<any> => {
      console.log(error);
      return error;
    }
  }
}
