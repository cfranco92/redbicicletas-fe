import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BicyclesListComponent } from './components/bicycles-list/bicycles-list.component';
import { BicycleDetailsComponent } from './components/bicycle-details/bicycle-details.component';
import { BicycleUpdateComponent } from './components/bicycle-update/bicycle-update.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    BicyclesListComponent,
    BicycleDetailsComponent,
    BicycleUpdateComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class BicycleModule { }
