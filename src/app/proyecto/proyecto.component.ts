import { Component, OnInit } from '@angular/core';
import { faGaugeSimpleMed } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  mostrar: Boolean = false;
  boton: String = "Leer más";

  mostrarFuncion (){
    if(this.mostrar) {
      this.mostrar = false;
      this.boton = "Leer más";
    } else {
      this.mostrar = true;
      this.boton = "Ocultar";
    }
  }
  


  constructor() { }

  ngOnInit(): void {
  }

}
