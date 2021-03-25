import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SquareComponent } from './components/square/square.component';
import { SquareListComponent } from './components/square-list/square-list.component';
import { SearchComponent } from './components/search/search.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { NasaSearchComponent } from './components/nasa-search/nasa-search.component';
import { NasaPageComponent } from './components/nasa-page/nasa-page.component';
import { AsteroidComponent } from './components/asteroid/asteroid.component';



const material = [
  MatInputModule,
  MatButtonModule,
  MatDatepickerModule,
  MatNativeDateModule
]

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    SquareListComponent,
    SearchComponent,
    LoginComponent,
    NasaSearchComponent,
    NasaPageComponent,
    AsteroidComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
