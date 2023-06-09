import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlightService } from './services/flight.service';
import { CurrencyService } from './services/currency.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { ShowRouteComponent } from './components/show-route/show-route.component';
import {MatCardModule} from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    ShowRouteComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    FormsModule 
  ],
  providers: [FlightService, CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
