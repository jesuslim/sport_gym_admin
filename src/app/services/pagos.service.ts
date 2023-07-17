import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PagosService {
  apiUrl: any = `${environment.apiUrl}/api/pagos`

  constructor( private http: HttpClient) { }

  getPagos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  createPago(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, data);
   }
}
