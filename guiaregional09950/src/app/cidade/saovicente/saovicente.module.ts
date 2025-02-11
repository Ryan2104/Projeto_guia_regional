import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaovicentePageRoutingModule } from './saovicente-routing.module';

import { SaovicentePage } from './saovicente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaovicentePageRoutingModule
  ],
  declarations: [SaovicentePage]
})
export class SaovicentePageModule {}
