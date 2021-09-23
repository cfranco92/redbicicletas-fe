import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BicyclesListComponent } from './components/bicycles-list/bicycles-list.component';
import { BicycleDetailsComponent } from './components/bicycle-details/bicycle-details.component';
import { BicycleUpdateComponent } from './components/bicycle-update/bicycle-update.component';
import { SharedModule } from '../shared/shared.module';
import { BicyclesRoutingModule } from './bicycles-routing.module';
import { CoreModule } from '../core/core.module';
import { BicycleNewComponent } from './components/bicycle-new/bicycle-new.component';



@NgModule({
  declarations: [
    BicyclesListComponent,
    BicycleDetailsComponent,
    BicycleUpdateComponent,
    BicycleNewComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    BicyclesRoutingModule,
    SharedModule,
  ]
})
export class BicycleModule { }
