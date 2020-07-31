import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListacomentariosPage } from './listacomentarios.page';

const routes: Routes = [
  {
    path: '',
    component: ListacomentariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListacomentariosPageRoutingModule {}
