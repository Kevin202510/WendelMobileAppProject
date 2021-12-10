import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneEdPage } from './gene-ed.page';

const routes: Routes = [
  {
    path: '',
    component: GeneEdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneEdPageRoutingModule {}
