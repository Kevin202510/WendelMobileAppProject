import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfeEdPage } from './profe-ed.page';

const routes: Routes = [
  {
    path: '',
    component: ProfeEdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfeEdPageRoutingModule {}
