import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Bicycle } from 'src/app/core/models/bicycle.model';
import { BicycleService } from 'src/app/core/services/bicycle/bicycle.service';

@Component({
  selector: 'app-bicycle-update',
  templateUrl: './bicycle-update.component.html',
  styleUrls: ['./bicycle-update.component.css']
})
export class BicycleUpdateComponent implements OnInit {

  bicycle: Bicycle;
  bicycleId: string;

  colors: any[] = [
    {
      text: 'Blanco'
    },
    {
      text: 'Negro'
    },
    {
      text: 'Rojo'
    },
    {
      text: 'Verde'
    },
  ]
  models: any[] = [
    {
      text: 'Ruta'
    },
    {
      text: 'Cross'
    },
    {
      text: 'Mountain'
    },
    {
      text: 'Turismo'
    },
  ]

  constructor(
    private route: ActivatedRoute,
    private bicyclesService: BicycleService
  ) {
    this.bicycle = {
      bicycleId: '',
      color: '',
      model: '',
      latitude: 0,
      longitude: 0,
    }
    this.bicycleId = ''
  }

  ngOnInit(): void {
    this.getBicycleId()
  }

  getBicycleId() {
    this.route.params.subscribe((params: Params) => {
      this.bicycleId = params.id.toUpperCase();
      this.getBicycle();
    });
  }

  getBicycle() {
    this.bicyclesService.readById(this.bicycleId).subscribe((bicycle) => {
      this.bicycle = bicycle.body[0];
    })
  }

  updateBicycle() {
    this.bicyclesService.update(this.bicycle).subscribe(() => {
      alert(`Bicicleta ${this.bicycle.bicycleId} actualizada con éxito`)
    })
  }

}
