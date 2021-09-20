import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BicycleService } from './services/bicycle/bicycle.service';
import { UserService } from './services/user/user.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    BicycleService,
    UserService
  ]
})
export class CoreModule { }
