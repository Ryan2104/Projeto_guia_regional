import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItanhaemPageRoutingModule } from './itanhaem-routing.module';

import { ItanhaemPage } from './itanhaem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItanhaemPageRoutingModule
  ],
  declarations: [ItanhaemPage]
})
export class ItanhaemPageModule {}
