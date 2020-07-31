import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearpoesiaPageRoutingModule } from './crearpoesia-routing.module';

import { CrearpoesiaPage } from './crearpoesia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearpoesiaPageRoutingModule
  ],
  declarations: [CrearpoesiaPage]
})
export class CrearpoesiaPageModule {}
