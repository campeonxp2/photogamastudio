import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_ROUTING} from './app-routing.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { SesionesComponent } from './components/sesiones/sesiones.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FormularioComponent } from './components/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactanosComponent,
    ExperienciaComponent,
    NosotrosComponent,
    SesionesComponent,
    FooterComponent,
    MenuComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
