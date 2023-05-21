import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Flight } from 'src/app/models/flight.model';

@Component({
  selector: 'app-show-route',
  templateUrl: './show-route.component.html',
  styleUrls: ['./show-route.component.css']
})
export class ShowRouteComponent implements OnInit, OnChanges {

  @Input() flights: Flight[];

  constructor() { }

  ngOnInit(): void {
    console.log("Show route flights: ", this.flights)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Show route flights: ", this.flights)
    
  }

}
