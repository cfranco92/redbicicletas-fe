import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bicycle } from '../../models/bicycle.model';

const api = '/api';

@Injectable({
  providedIn: 'root'
})
export class BicycleService {

  constructor(private http: HttpClient) { }

  create(bicycle: Bicycle) {
    return this.http.post<Bicycle>(`${api}/bicycle`, bicycle);
  }

  read() { }

  update() { }

  delete() { }
}
