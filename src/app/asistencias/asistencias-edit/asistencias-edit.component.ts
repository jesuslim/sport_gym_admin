import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AsistenciasService } from 'src/app/services/asistencias.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-asistencias-edit',
  templateUrl: './asistencias-edit.component.html',
  styleUrls: ['./asistencias-edit.component.css']
})
export class AsistenciasEditComponent implements OnInit{
  asistenciaId: string = '';
  asistencia: any ;
  miembros: any[] = [];
  filterForm: FormGroup;
/**
 *
 */
constructor(
  private activatedRoute: ActivatedRoute,
  private usuariosService: UsuariosService,
    private asistenciasService: AsistenciasService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.filterForm = this.formBuilder.group({
      filterText: [''],
      selectedMiembro: ['']
    });
  }

ngOnInit(): void {
  this.activatedRoute.params.subscribe( params => {
    this.asistenciaId = params['id'];
  });
  this.findMiembros();
  this.findAsistencia();
}
findMiembros() {
  this.usuariosService.getUsuarios().subscribe((response) => {
    this.miembros = response;

  });
}

findAsistencia() {
  this.asistenciasService.editAsistencia(this.asistenciaId).subscribe((response) => {
    this.asistencia = response;
    console.log('edit asistencia registro ', this.asistencia);

    this.filterForm.controls['selectedMiembro'].setValue(this.asistencia.ID_Miembro)
  });
}

get filteredMiembros(): any[] {
  const filterText = this.filterForm.value.filterText.toLowerCase();
  return this.miembros.filter(miembro =>
    miembro.Nombre.toLowerCase().includes(filterText)
  );
}

update(form: any) {
  form.ID_Asistencia = this.asistencia.ID_Asistencia
  form.ID_Miembro = form.selectedMiembro
console.log(form);
this.asistenciasService.updateAsistencias(form).subscribe((response) => {
  console.log('Asistencias tomada con exito');

  this.router.navigate(['./dashboard/asistencias/list']).then(() => {
    window.location.reload();
  });
});
}
}
