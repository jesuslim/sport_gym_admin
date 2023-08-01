import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AsistenciasService {
  apiUrl: any = `${environment.apiUrl}/api/asistencias`

  constructor( private http: HttpClient) { }

 getAsistencias(): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}`);
 }

 createAsistencias(data: any): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/create`, data);
 }

 editAsistencia(id: any): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/edit/${id}`);
}

 updateAsistencias(data: any): Observable<any> {
  return this.http.put<any>(`${this.apiUrl}/update/${data.ID_Asistencia}`, data);
 }

 deleteAsistencias(id: any): Observable<any> {
  return this.http.delete<any>(`${this.apiUrl}/delete/${id}`);
 }

}
