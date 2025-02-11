import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaovicentePage } from './saovicente.page';

const routes: Routes = [
  {
    path: '',
    component: SaovicentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaovicentePageRoutingModule {}
