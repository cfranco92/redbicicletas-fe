import { Component, OnInit } from '@angular/core';
import { BicycleFactory } from 'src/app/core/factory/bicycle.factory';
import { Bicycle } from 'src/app/core/models/bicycle.model';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { BicycleService } from 'src/app/core/services/bicycle/bicycle.service';

@Component({
  selector: 'app-bicycles-list',
  templateUrl: './bicycles-list.component.html',
  styleUrls: ['./bicycles-list.component.css']
})
export class BicyclesListComponent implements OnInit {

  bicycles: any[];
  isLogin: boolean = false;
  user: any;

  constructor(
    private bicyclesService: BicycleService,
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
    this.bicyclesService.read().subscribe((data) => {
      this.bicycles = data.body.map((bicycle: any) => BicycleFactory.toModel(bicycle))
    })
  }

  deleteBicycleById(id: String) {
    this.bicyclesService.delete(id).then(() => this.ngOnInit())
  }

  rentBicycleById(bicycle: Bicycle) {
    bicycle.user = this.user.uid;
    this.bicyclesService.updateById(bicycle).subscribe((response: any) => {
      alert(`Bicleta con id ${bicycle.bicycleId} ha sido rentada por ${this.user.displayName} con el id ${this.user.uid}`)
    });
  }

  returnBicycleById(bicycle: Bicycle) {
    bicycle.user = '';
    this.bicyclesService.updateById(bicycle).subscribe((response: any) => {
      alert(`Bicleta con id ${bicycle.bicycleId} ha sido entregada por ${this.user.displayName} con el id ${this.user.uid}`)
    });
  }
}
