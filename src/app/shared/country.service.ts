import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Country } from '../country';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private country: Country;
  private baseUrl: string = 'localhost:3000';
  //private baseUrl: string = 'localhost:8080';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}

  createCountry(country: Country) {
    return this.http.post(this.baseUrl + '/create', country, {
      headers: this.headers,
    });
  }

  readCountries() {
    return this.http.get(this.baseUrl + '/read', {
      headers: this.headers,
    });
  }

  updateCountry(country: Country) {
    return this.http.put(this.baseUrl + '/', country, {
      headers: this.headers,
    });
  }

  daleteCountry(id: string) {
    return this.http.delete(this.baseUrl + '/' + id, {
      headers: this.headers,
    });
  }

  setter(country: Country) {
    this.country = country;
  }

  getter() {
    return this.country;
  }
}
