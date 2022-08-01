import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';




const routes: Routes = [
  {path: '' , component: InicioComponent},
  {path: 'Iniciar-sesion' , component: IniciosesionComponent}
 
  
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


