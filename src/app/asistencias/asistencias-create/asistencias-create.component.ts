import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AsistenciasService } from 'src/app/services/asistencias.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-asistencias-create',
  templateUrl: './asistencias-create.component.html',
  styleUrls: ['./asistencias-create.component.css']
})
export class AsistenciasCreateComponent implements OnInit{
  miembros: any[] = [];
  filterForm: FormGroup;
  /**
   *
   */
  constructor(
    private usuariosService: UsuariosService,
    private asistenciasService: AsistenciasService,
    private formBuilder: FormBuilder,
  ) {
    this.filterForm = this.formBuilder.group({
      filterText: [''],
      selectedMiembro: ['']
    });
  }

  ngOnInit(): void {
this.findMiembros();
  }

  findMiembros() {
    this.usuariosService.getUsuarios().subscribe((response) => {
      this.miembros = response;
      console.log('mienbros ', this.miembros);

    });
  }

  get filteredMiembros(): any[] {
    const filterText = this.filterForm.value.filterText.toLowerCase();
    return this.miembros.filter(miembro =>
      miembro.Nombre.toLowerCase().includes(filterText)
    );
  }

  save(form: any) {
    form.ID_Miembro = form.selectedMiembro
  console.log(form);
  this.asistenciasService.createAsistencias(form).subscribe((response) => {
    console.log('Asistencias tomada con exito');

  });
  }
}
