import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Country } from '../country';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private country: Country;
  //private baseUrl: string = 'http://localhost:8080';
  private baseUrl: string = 'https://mean-crud-backend.herokuapp.com';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}

  createCountry(country: Country) {
    return this.http.post(this.baseUrl + '/', country, {
      headers: this.headers,
    });
  }

  readCountries() {
    return this.http.get(this.baseUrl + '/', {
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
