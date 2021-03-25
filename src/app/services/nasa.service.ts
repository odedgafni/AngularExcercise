import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class NasaService {

  private apiKey: string = 'mevPfqGvVklmR8lXdZZ7aBrbrWRl1UAIvQ49DrLe';
  private baseUrl: string = 'https://api.nasa.gov/neo/rest/v1/feed?';

  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  getAsteroids(start: string, end: string): Observable<Object> {
    return this.http.get(`${this.baseUrl}start_date=${start}&end_date=${end}&api_key=${this.apiKey}`)
  }
}

