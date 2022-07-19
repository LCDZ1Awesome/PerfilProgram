import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';
import { AcerdadeComponent } from 'src/app/acercade/acerdade/acerdade.component';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']

})
export class ImagenComponent implements OnInit {

hola: any;

  constructor(private servicio1:ServicioService) { }

  ngOnInit(): void {
    this.servicio1.obtener().subscribe(data =>{
      console.log(data);
      this.hola = data;
    }
      );
  }
}
