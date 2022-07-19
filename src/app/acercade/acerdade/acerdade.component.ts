import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';


@Component({
  selector: 'app-acerdade',
  templateUrl: './acerdade.component.html',
  styleUrls: ['./acerdade.component.css']
})
export class AcerdadeComponent implements OnInit {

Editar() {

}
mostrar: boolean = false;



buenas: any;
datos:any;

  constructor(private servicio: ServicioService) { }

  ngOnInit(): void {
    this.servicio.obtener().subscribe(data =>{
      console.log(data);
      this.buenas = data;
      this.datos = data.datos; /* el datos de la derecha se refiere
       al nombre del array en json */
    }
      );
  }

}
