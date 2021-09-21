import { Component, OnInit } from '@angular/core';
import { BicycleFactory } from 'src/app/core/factory/bicycle.factory';
import { BicycleService } from 'src/app/core/services/bicycle/bicycle.service';

@Component({
  selector: 'app-bicycles-list',
  templateUrl: './bicycles-list.component.html',
  styleUrls: ['./bicycles-list.component.css']
})
export class BicyclesListComponent implements OnInit {

  bicycles: any[];

  constructor(private bicyclesService: BicycleService) {
    this.bicycles = []
  }

  ngOnInit(): void {
    this.getBicycles()
  }

  getBicycles() {
    this.bicyclesService.read().subscribe((data) => {
      console.log(data)
      this.bicycles = data.body.map((bicycle: any) => BicycleFactory.toModel(bicycle))
      console.log(this.bicycles)
    })
  }
}
