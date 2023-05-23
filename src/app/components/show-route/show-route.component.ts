import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Flight } from 'src/app/models/flight.model';
import { CurrencyService, ExchangeRates } from 'src/app/services/currency.service';

@Component({
  selector: 'app-show-route',
  templateUrl: './show-route.component.html',
  styleUrls: ['./show-route.component.css'],
})

export class ShowRouteComponent implements OnInit, OnChanges {
  @Input() flights: Flight[];
  @Input() origin: string;
  @Input() destination: string;
  matchingFlights: Flight[] = [];
  exchangeRate: ExchangeRates;
  selectedCurrency: string;
  convertedPrice: number;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getExchangeRates().subscribe(
      (exchangeRate) => {
        this.exchangeRate = exchangeRate;
      },
      (error) => {
        console.error('Error getting exchange rates:', error);
      }
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.flights && this.flights) {
      this.searchMatchingFlights();
    }
  }

  searchMatchingFlights(): void {
    this.matchingFlights = this.flights.filter((flight) => {
      return (
        flight['departureStation'] === this.origin &&
        flight['arrivalStation'] === this.destination
      );
    });

    if (this.exchangeRate) {
      this.matchingFlights.forEach((flight) => {
        flight.price = flight.price * this.exchangeRate.rates[this.selectedCurrency];
      });
    }

    this.convertPrice();
  }

  selectCurrency(currency: string): void {
    this.selectedCurrency = currency;
    this.convertPrice();
  }

  convertPrice(): void {
    if (this.matchingFlights.length > 0) {
      switch (this.selectedCurrency) {
        case 'USD':
          this.convertedPrice = this.matchingFlights[0].price; 
          break;
        case 'COP':
          this.convertedPrice = this.matchingFlights[0].price * this.exchangeRate.rates[this.selectedCurrency]; 
          break;
        case 'EUR':
          this.convertedPrice = this.matchingFlights[0].price * this.exchangeRate.rates[this.selectedCurrency]; 
          break;
        default:
          this.convertedPrice = this.matchingFlights[0].price; 
      }
    }
  }
}
