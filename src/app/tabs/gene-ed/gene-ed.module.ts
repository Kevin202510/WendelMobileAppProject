import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneEdPageRoutingModule } from './gene-ed-routing.module';

import { GeneEdPage } from './gene-ed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneEdPageRoutingModule
  ],
  declarations: [GeneEdPage]
})
export class GeneEdPageModule {}
