import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MongaguaPage } from './mongagua.page';

const routes: Routes = [
  {
    path: '',
    component: MongaguaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MongaguaPageRoutingModule {}
