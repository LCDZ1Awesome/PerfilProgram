import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent implements OnInit {

form:FormGroup;

  constructor(private FormBuilder:FormBuilder ) {
    this.form=this.FormBuilder.group({

nombre:["",[Validators.required, Validators.minLength(5)] ],
password:["", [Validators.required, Validators.minLength(5)]],
deviceId: ["17867868768"],
deviceType: ["DEVICE_TYPE_ANDROID"],
notificationToken: ["6765757eececc34"]

    })

    


  }

  ngOnInit(): void {
  }

  get Nombre(){
return this.form.get("nombre");

  }

  get Contrasena(){

    return this.form.get("password"); 
  }



}
