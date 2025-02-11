import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeruibePageRoutingModule } from './peruibe-routing.module';

import { PeruibePage } from './peruibe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeruibePageRoutingModule
  ],
  declarations: [PeruibePage]
})
export class PeruibePageModule {}
