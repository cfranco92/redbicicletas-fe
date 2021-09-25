import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MapComponent } from './components/map/map.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    MapComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    MapComponent,
    FormsModule
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ]
})
export class SharedModule { }
