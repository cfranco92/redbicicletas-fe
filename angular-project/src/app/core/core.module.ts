import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BicycleService } from './services/bicycle/bicycle.service';
import { MarkerService } from './services/marker/marker.service';
import { AuthenticationService } from './services/authentication/authentication.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    BicycleService,
    BicycleService,
    MarkerService,
    AuthenticationService
  ]
})
export class CoreModule { }
