import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FlightService } from './../../services/flight.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  formGroup!: FormGroup;

constructor(private formBuilder: FormBuilder, private flightService: FlightService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  limitLength(event: KeyboardEvent, maxLength: number): void {
    const input = event.target as HTMLInputElement;
    if (input.value.length >= maxLength) {
      event.preventDefault();
    }
  }

  buildForm(): void {
    this.formGroup = new FormGroup({
      origin: new FormControl('', [Validators.required, Validators.maxLength(3)]),
      destination: new FormControl('', [Validators.required, Validators.maxLength(3)])
    });
  
    this.formGroup.get('origin')?.valueChanges.subscribe(() => {
      this.convertToUppercase();
    });
  
    this.formGroup.get('destination')?.valueChanges.subscribe(() => {
      this.convertToUppercase();
    });
  }

  convertToUppercase(): void {
    const originControl = this.formGroup.get('origin');
    const destinationControl = this.formGroup.get('destination');
  
    if (originControl && destinationControl) {
      originControl.setValue(originControl.value?.toUpperCase(), { emitEvent: false });
      destinationControl.setValue(destinationControl.value?.toUpperCase(), { emitEvent: false });
    }
  }

  submitForm(): void {
    if (this.formGroup.valid) {
      const origin = this.formGroup.get('origin')?.value;
      const destination = this.formGroup.get('destination')?.value;
    
      this.flightService.getFlights().subscribe(
        (flights) => {
          console.log('Flights:', flights);
        },
        (error) => {
          console.error('Error getting flights:', error);
        }
      );
    }
  }
  

}
