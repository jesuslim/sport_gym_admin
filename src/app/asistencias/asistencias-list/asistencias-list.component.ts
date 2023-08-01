import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsistenciasService } from 'src/app/services/asistencias.service';

@Component({
  selector: 'app-asistencias-list',
  templateUrl: './asistencias-list.component.html',
  styleUrls: ['./asistencias-list.component.css']
})
export class AsistenciasListComponent implements OnInit{

  asistencias: any[] = [];

/**
 *
 */
constructor(
  private router:Router,
  private asistenciasService: AsistenciasService
  ) {}

ngOnInit(): void {
this.findAsistencias();
}

findAsistencias() {
  this.asistenciasService.getAsistencias().subscribe((responce) => {
    this.asistencias = responce;
    console.log('asistencias ', this.asistencias);

  });
}

toCreate() {
  this.router.navigate(['./dashboard/asistencias/create']);

}
toEdit(id: any){
  this.router.navigate(['./dashboard/asistencias/edit/'+id]);
}
destroy(id: any) {
  this.asistenciasService.deleteAsistencias(id).subscribe((responce) => {
    console.log('asistencia eliminada ');
    this.router.navigate(['./dashboard/asistencias/list']).then(() => {
      window.location.reload();
    });
  });
}
}
