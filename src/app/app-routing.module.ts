import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'gene-ed',
    loadChildren: () => import('./tabs/gene-ed/gene-ed.module').then( m => m.GeneEdPageModule)
  },
  {
    path: 'profe-ed',
    loadChildren: () => import('./tabs/profe-ed/profe-ed.module').then( m => m.ProfeEdPageModule)
  },
  {
    path: 'major',
    loadChildren: () => import('./tabs/major/major.module').then( m => m.MajorPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
