import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListapoesiasPageRoutingModule } from './listapoesias-routing.module';

import { ListapoesiasPage } from './listapoesias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListapoesiasPageRoutingModule
  ],
  declarations: [ListapoesiasPage]
})
export class ListapoesiasPageModule {}
