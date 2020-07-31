import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListacomentariosPageRoutingModule } from './listacomentarios-routing.module';

import { ListacomentariosPage } from './listacomentarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListacomentariosPageRoutingModule
  ],
  declarations: [ListacomentariosPage]
})
export class ListacomentariosPageModule {}
