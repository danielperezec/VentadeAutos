import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaAutosComponent } from './paginas/lista-autos/lista-autos.component';
import { AutosDetailComponent } from './componentes/autosDetail/autosDetail.component';
import { NotFoundComponent } from './componentes/notFound/notFound.component';
import { HomepageComponent } from './paginas/homepage/homepage.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { EditarAutoComponent } from './componentes/editar-auto/editar-auto.component';
import { registerLocaleData } from '@angular/common';
import { ResgitroUsuarioComponent } from './componentes/resgitroUsuario/resgitroUsuario.component';

const routes: Routes =
  [
    {
      path: '',
      component: HomepageComponent
    },
    {
      path: 'vehiculo',
      component: ListaAutosComponent
    },
    {
      path: 'clientes',
      component: ResgitroUsuarioComponent
    },
    {
      path: 'vehiculo/nuevo',
      component: FormularioComponent
    },
    {
      path:'vehiculo/editar/:codigo',
      component: EditarAutoComponent
    },
    {
      path: 'vehiculo/:codigo',
      component: AutosDetailComponent
    },
    
    
    {
      path: '**',
      component: NotFoundComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
