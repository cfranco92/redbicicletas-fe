import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bicycle } from '../../models/bicycle.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BicycleService {

  constructor(private http: HttpClient) { }

  create(bicycle: Bicycle) {
    return this.http.post<any>(`${environment.bicyclesApi}/bicicleta`, bicycle);
  }

  read() {
    return this.http.get<any>(`${environment.bicyclesApi}/bicicleta`);
  }

  readById(bicicletaId: String) {
    return this.http.get<any>(`${environment.bicyclesApi}/bicicleta/${bicicletaId}`);
  }

  update(bicycle: Bicycle) {
    return this.http.put<any>(`${environment.bicyclesApi}/bicicleta/${bicycle._id}`, bicycle)
  }

  updateById(bicycle: Bicycle) {
    return this.http.put<any>(`${environment.bicyclesApi}/bicicleta/${bicycle.id}`, bicycle)
  }

  delete(id: String) {
    return this.http.delete<any>(`${environment.bicyclesApi}/bicicleta/${id}`).toPromise().then(data => {
      alert(data.body)
    });
  }
}
