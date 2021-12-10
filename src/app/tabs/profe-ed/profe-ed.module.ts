import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfeEdPageRoutingModule } from './profe-ed-routing.module';

import { ProfeEdPage } from './profe-ed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfeEdPageRoutingModule
  ],
  declarations: [ProfeEdPage]
})
export class ProfeEdPageModule {}
