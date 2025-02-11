import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItanhaemPage } from './itanhaem.page';

const routes: Routes = [
  {
    path: '',
    component: ItanhaemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItanhaemPageRoutingModule {}
