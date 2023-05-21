import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlightService } from './services/flight.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [FlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
