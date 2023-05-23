import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ExchangeRates {
  rates: {
    [key: string]: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(private http: HttpClient) {}

  getExchangeRates(): Observable<ExchangeRates> {
    const apiUrl = 'https://api.exchangerate-api.com/v4/latest/USD';
    return this.http.get<ExchangeRates>(apiUrl);
  }
}
