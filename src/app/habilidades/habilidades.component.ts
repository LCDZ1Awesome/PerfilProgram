import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicios/servicio.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
habilidades: any
  constructor(private servicio1:ServicioService) { }

  ngOnInit(): void {
    this.servicio1.obtener().subscribe(data =>{
      console.log(data);
      this.habilidades = data;
    }
      );
  }

}
