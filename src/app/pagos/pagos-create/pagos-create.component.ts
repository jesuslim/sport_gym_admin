import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PagosService } from 'src/app/services/pagos.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-pagos-create',
  templateUrl: './pagos-create.component.html',
  styleUrls: ['./pagos-create.component.css']
})
export class PagosCreateComponent implements OnInit{

  miembros: any[] = [];
  filterForm: FormGroup;

/**
 *
 */
constructor(
  private usuariosService: UsuariosService,
    private formBuilder: FormBuilder,
    private pagosService: PagosService
) {
  this.filterForm = this.formBuilder.group({
    filterText: ['', Validators.required],
    selectedMiembro: ['', Validators.required],
    Monto: ['', Validators.required],
    Metodo_Pago : ['', Validators.required]
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
  form.ID_Miembro_Registrador = localStorage.getItem('ID_Usuario');

  console.log('formulario ',form);
  this.pagosService.createPago(form).subscribe((response) => {
    console.log('Pago tomado con exito');
  });
}
}
