import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Bicycle } from '../../models/bicycle.model';



@Injectable({
  providedIn: 'root'
})
export class RentingService {

  constructor(private http: HttpClient) { }

  read() {
    return this.http.get<any>(`${environment.rentingApi}/bicicleta`);
  }

  updateById(bicycle: Bicycle) {
    return this.http.patch<any>(`${environment.rentingApi}/bicicleta/${bicycle.id}`, { user: bicycle.user })
  }

}
