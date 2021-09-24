import { Component, OnInit } from '@angular/core';
import { BicycleFactory } from 'src/app/core/factory/bicycle.factory';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { BicycleService } from 'src/app/core/services/bicycle/bicycle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bicycles: any[] = []

  constructor(
    private bicyclesService: BicycleService,
    private authService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.getBicycles()
  }

  getBicycles() {
    this.bicyclesService.read().subscribe((data) => {
      this.bicycles = data.body.map((bicycle: any) => BicycleFactory.toModel(bicycle))
    })
  }

  logIn() {
    this.authService.login();
  }

  logOut() {
    this.authService.logout();
  }
}
