import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MongaguaPageRoutingModule } from './mongagua-routing.module';

import { MongaguaPage } from './mongagua.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MongaguaPageRoutingModule
  ],
  declarations: [MongaguaPage]
})
export class MongaguaPageModule {}
