import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuarujaPage } from './guaruja.page';

const routes: Routes = [
  {
    path: '',
    component: GuarujaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuarujaPageRoutingModule {}
