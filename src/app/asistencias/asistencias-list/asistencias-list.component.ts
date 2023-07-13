import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asistencias-list',
  templateUrl: './asistencias-list.component.html',
  styleUrls: ['./asistencias-list.component.css']
})
export class AsistenciasListComponent implements OnInit{
/**
 *
 */
constructor( private router:Router) {}

ngOnInit(): void {

}
toCreate() {
  this.router.navigate(['./dashboard/asistencias/create']);

}
}
