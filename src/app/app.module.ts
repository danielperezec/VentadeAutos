import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAutosComponent } from './paginas/lista-autos/lista-autos.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AutomovilesModule } from './servicios/automoviles/automoviles.module';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { AutosDetailComponent } from './componentes/autosDetail/autosDetail.component';
import { HomepageComponent } from './paginas/homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { CommonModule } from '@angular/common';
import { EstrellasComponent } from './componentes/estrellas/estrellas.component';
import { RouterModule } from '@angular/router';
import { EditarAutoComponent } from './componentes/editar-auto/editar-auto.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserInterceptorService } from './interceptores/UserInterceptor.service';
import { ResgitroUsuarioComponent } from './componentes/resgitroUsuario/resgitroUsuario.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TablaComponent,
    AutosDetailComponent,
    ListaAutosComponent,
    HomepageComponent,
    FormularioComponent,
    EstrellasComponent,
    EditarAutoComponent,
    ResgitroUsuarioComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutomovilesModule,
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    
   
  ],
  exports: [
FormularioComponent,
EstrellasComponent,


  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: UserInterceptorService, 
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
