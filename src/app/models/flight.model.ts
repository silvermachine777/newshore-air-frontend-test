import { Transport } from './transport.model';

export class Flight {
  transport: Transport;
  origin: string;
  destination: string;
  price: number;

  constructor(transport: Transport, origin: string, destination: string, price: number) {
    this.transport = transport;
    this.origin = origin;
    this.destination = destination;
    this.price = price;
  }
}
