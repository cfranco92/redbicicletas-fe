import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {

  constructor(private http: HttpClient) { }

  read() {
    return this.http.get<any>(`${environment.localizationApi}/bicicleta`);
  }
}
