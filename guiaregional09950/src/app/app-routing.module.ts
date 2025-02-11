import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'sair',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'santos',
    loadChildren: () => import('./cidade/santos/santos.module').then( m => m.SantosPageModule)
  },
  {
    path: 'bertioga',
    loadChildren: () => import('./cidade/bertioga/bertioga.module').then( m => m.BertiogaPageModule)
  },
  {
    path: 'guaruja',
    loadChildren: () => import('./cidade/guaruja/guaruja.module').then( m => m.GuarujaPageModule)
  },
  {
    path: 'saovicente',
    loadChildren: () => import('./cidade/saovicente/saovicente.module').then( m => m.SaovicentePageModule)
  },
  {
    path: 'cubatao',
    loadChildren: () => import('./cidade/cubatao/cubatao.module').then( m => m.CubataoPageModule)
  },
  {
    path: 'praiagrande',
    loadChildren: () => import('./cidade/praiagrande/praiagrande.module').then( m => m.PraiagrandePageModule)
  },
  {
    path: 'mongagua',
    loadChildren: () => import('./cidade/mongagua/mongagua.module').then( m => m.MongaguaPageModule)
  },
  {
    path: 'itanhaem',
    loadChildren: () => import('./cidade/itanhaem/itanhaem.module').then( m => m.ItanhaemPageModule)
  },
  {
    path: 'peruibe',
    loadChildren: () => import('./cidade/peruibe/peruibe.module').then( m => m.PeruibePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
