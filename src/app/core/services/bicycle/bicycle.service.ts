import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bicycle } from '../../models/bicycle.model';

const api = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class BicycleService {

  constructor(private http: HttpClient) { }

  create(bicycle: Bicycle) {
    return this.http.post<Bicycle>(`${api}/bicicleta`, bicycle);
  }

  read() {
    return this.http.get<any>(`${api}/bicicleta`);
  }

  readById() { }

  update() { }

  delete(id: String) {
    return this.http.delete<any>(`${api}/bicicleta/${id}`).toPromise().then(data => {
      alert(data.body)
    });
  }
}
