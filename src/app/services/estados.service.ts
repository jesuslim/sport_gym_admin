import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {
  apiUrl: any = `${environment.apiUrl}/api/`

  constructor( private http: HttpClient) { }

  getEstados(): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}estados`);
  }
}
