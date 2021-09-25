import { Component, OnInit } from '@angular/core';
import { BicycleFactory } from 'src/app/core/factory/bicycle.factory';
import { Bicycle } from 'src/app/core/models/bicycle.model';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { BicycleService } from 'src/app/core/services/bicycle/bicycle.service';
import { RentingService } from 'src/app/core/services/renting/renting.service';

@Component({
  selector: 'app-bicycle-renting',
  templateUrl: './bicycle-renting.component.html',
  styleUrls: ['./bicycle-renting.component.css']
})
export class BicycleRentingComponent implements OnInit {

  bicycles: any[];
  isLogin: boolean = false;
  user: any;

  constructor(
    private rentingService: RentingService,
    private authService: AuthenticationService
  ) {
    this.bicycles = []
    this.getUserStatus()
  }

  ngOnInit(): void {
    this.getBicycles()
  }

  getUserStatus() {
    this.authService.getUserStatus().subscribe((user) => {
      if (user) {
        this.user = Object(user.multiFactor).user;
        this.isLogin = true
      } else {
        this.isLogin = false
      }
    })
  }

  getBicycles() {
    this.rentingService.read().subscribe((data) => {
      this.bicycles = data.body.map((bicycle: any) => BicycleFactory.toModel(bicycle))
      console.log(this.bicycles)
    })
  }

  rentBicycleById(bicycle: Bicycle) {
    console.log(bicycle)
    bicycle.user = this.user.uid;
    this.rentingService.updateById(bicycle).subscribe((response: any) => {
      alert(`Bicleta con id ${bicycle.bicycleId} ha sido rentada por ${this.user.displayName} con el id ${this.user.uid}`)
    });
  }

  returnBicycleById(bicycle: Bicycle) {
    bicycle.user = '';
    this.rentingService.updateById(bicycle).subscribe((response: any) => {
      alert(`Bicleta con id ${bicycle.bicycleId} ha sido entregada por ${this.user.displayName} con el id ${this.user.uid}`)
    });
  }

}
