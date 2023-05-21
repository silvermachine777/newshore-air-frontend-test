import { Flight } from './flight.model';

export class Journey {
  flights: Flight[];
  origin: string;
  destination: string;
  price: number;

  constructor(flights: Flight[], origin: string, destination: string, price: number) {
    this.flights = flights;
    this.origin = origin;
    this.destination = destination;
    this.price = price;
  }
}
