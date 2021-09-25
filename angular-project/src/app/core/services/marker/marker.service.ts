import { Injectable } from '@angular/core';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  constructor() { }

  makeMarkers(map: any, lat: number, lon: number): void {
    const marker = L.marker([lat, lon]);
    marker.addTo(map);
  }
}
