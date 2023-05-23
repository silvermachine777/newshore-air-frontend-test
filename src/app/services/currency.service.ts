import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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
    const apiUrl = environment.currencyApiUrl;
    return this.http.get<ExchangeRates>(apiUrl);
  }
}
