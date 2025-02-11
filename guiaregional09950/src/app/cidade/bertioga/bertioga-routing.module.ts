import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BertiogaPage } from './bertioga.page';

const routes: Routes = [
  {
    path: '',
    component: BertiogaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BertiogaPageRoutingModule {}
