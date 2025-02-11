import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuarujaPageRoutingModule } from './guaruja-routing.module';

import { GuarujaPage } from './guaruja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuarujaPageRoutingModule
  ],
  declarations: [GuarujaPage]
})
export class GuarujaPageModule {}
