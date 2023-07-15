import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  apiUrl: any = `${environment.apiUrl}/api/`

  constructor( private http: HttpClient) { }

  getUsuarios(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}miembros`);
  }
  getUsuariosById(id: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}miembros/edit/${id}`);
  }
  updateUsuarios(data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}miembros/update/${data.id}`, data);
  }
  deleteUsuario(id: any): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}miembros/delete/${id}`);
  }

}
