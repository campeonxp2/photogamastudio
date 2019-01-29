import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {NosotrosComponent} from './components/nosotros/nosotros.component';
import {SesionesComponent} from './components/sesiones/sesiones.component';
import {ExperienciaComponent} from './components/experiencia/experiencia.component';
import {ContactanosComponent} from './components/contactanos/contactanos.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'sesiones', component: SesionesComponent},
  { path: 'experiencia', component: ExperienciaComponent},
  { path: 'contactanos', component: ContactanosComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const APP_ROUTING = RouterModule.forRoot(routes);
