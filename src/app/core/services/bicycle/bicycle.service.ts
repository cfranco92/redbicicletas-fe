import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bicycle } from '../../models/bicycle.model';

const api = 'http://169.57.112.124:30690';

@Injectable({
  providedIn: 'root'
})
export class BicycleService {

  constructor(private http: HttpClient) { }

  create(bicycle: Bicycle) {
    return this.http.post<any>(`${api}/bicicleta`, bicycle);
  }

  read() {
    return this.http.get<any>(`${api}/bicicleta`);
  }

  readById(bicicletaId: String) {
    return this.http.get<any>(`${api}/bicicleta/${bicicletaId}`);
  }

  update(bicycle: Bicycle) {
    return this.http.put<any>(`${api}/bicicleta/${bicycle._id}`, bicycle)
  }

  updateById(bicycle: Bicycle) {
    return this.http.put<any>(`${api}/bicicleta/${bicycle.id}`, bicycle)
  }

  delete(id: String) {
    return this.http.delete<any>(`${api}/bicicleta/${id}`).toPromise().then(data => {
      alert(data.body)
    });
  }
}
