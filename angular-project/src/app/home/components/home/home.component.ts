import { Component, OnInit } from '@angular/core';
import { BicycleFactory } from 'src/app/core/factory/bicycle.factory';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { BicycleService } from 'src/app/core/services/bicycle/bicycle.service';
import { LocalizationService } from 'src/app/core/services/localization/localization.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLogin: boolean = false
  user: any;
  bicycles: any[] = []

  constructor(
    private localizationService: LocalizationService,
    private authService: AuthenticationService,
  ) {
    this.getUserStatus();
  }

  ngOnInit(): void {
    this.getBicycles();
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
    this.localizationService.read().subscribe((data) => {
      this.bicycles = data.body.map((bicycle: any) => BicycleFactory.toModel(bicycle))
    })
  }

  logIn() {
    this.authService.login();
  }

  logOut() {
    this.authService.logout();
    this.user = ''
  }


}
