import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { GeneralrouRoutingModule } from './Generalrou.route';
import { SharedmaterialmodModule } from '../SharedMaterial/sharedmaterialmod.module';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,GeneralrouRoutingModule,SharedmaterialmodModule,ReactiveFormsModule
  ],
  declarations: [ PagenotfoundComponent]
})
export class GeneralmodModule { }
