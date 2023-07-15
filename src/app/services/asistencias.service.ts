import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AsistenciasService {
  apiUrl: any = `${environment.apiUrl}/api/`

  constructor( private http: HttpClient) { }


}
