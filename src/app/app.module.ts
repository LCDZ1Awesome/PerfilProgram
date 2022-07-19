import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AcerdadeComponent } from './acercade/acerdade/acerdade.component';
import {HttpClientModule } from '@angular/common/http';
import { ImagenComponent } from './imagen/imagen/imagen.component';

@NgModule({
  declarations: [
    AppComponent,
    AcerdadeComponent,
    ImagenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
