import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BertiogaPageRoutingModule } from './bertioga-routing.module';

import { BertiogaPage } from './bertioga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BertiogaPageRoutingModule
  ],
  declarations: [BertiogaPage]
})
export class BertiogaPageModule {}
