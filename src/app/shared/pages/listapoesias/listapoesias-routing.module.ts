import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListapoesiasPage } from './listapoesias.page';

const routes: Routes = [
  {
    path: '',
    component: ListapoesiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListapoesiasPageRoutingModule {}
