import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AcerdadeComponent } from './acercade/acerdade/acerdade.component';
import {HttpClientModule } from '@angular/common/http';
import { ImagenComponent } from './imagen/imagen/imagen.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
import { InicioComponent } from './inicio/inicio.component';

import { FooterComponent } from './footer/footer.component';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AcerdadeComponent,
    ImagenComponent,
    HabilidadesComponent,
    ProyectoComponent,
    IniciosesionComponent,
    InicioComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
