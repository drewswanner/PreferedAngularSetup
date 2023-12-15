import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './app/Modules/material-module';
import { NgModule } from '@angular/core';
import { NgbModule, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './app/home/home.component';
import { UnderConstructionComponent } from './app/under-construction/under-construction.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UnderConstructionComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    MaterialModule,
    NgbModule,
  ],
  providers: [MaterialModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
