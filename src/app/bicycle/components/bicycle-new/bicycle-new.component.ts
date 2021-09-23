import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Bicycle } from 'src/app/core/models/bicycle.model';
import { BicycleService } from 'src/app/core/services/bicycle/bicycle.service';

@Component({
  selector: 'app-bicycle-new',
  templateUrl: './bicycle-new.component.html',
  styleUrls: ['./bicycle-new.component.css']
})
export class BicycleNewComponent implements OnInit {

  bicycle: Bicycle;
  bicycleId: string;

  constructor(
    private route: ActivatedRoute,
    private bicyclesService: BicycleService
  ) {
    this.bicycle = {
      bicycleId: '',
      color: '',
      model: '',
      latitude: undefined,
      longitude: undefined,
    }
    this.bicycleId = ''
  }

  ngOnInit(): void { }

  createBicycle() {
    this.bicyclesService.create(this.bicycle).subscribe((response) => {
      console.log(response)
    })
    alert("Updated")
  }

}
