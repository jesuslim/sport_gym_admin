import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { EstadosService } from 'src/app/services/estados.service';
import { MunicipiosService } from 'src/app/services/municipios.service';
import { PerfilesService } from 'src/app/services/perfiles.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
@Component({
  selector: 'app-usuarios-create',
  templateUrl: './usuarios-create.component.html',
  styleUrls: ['./usuarios-create.component.css']
})
export class UsuariosCreateComponent implements OnInit{


  usuarioForm= this.formBuilder.group({
    Nombre: ['', Validators.required],
    Apellido_Paterno: ['', Validators.required],
    Apellido_Materno: ['', Validators.required],
    Matricula: ['', Validators.required],
    ID_Perfil: ['', Validators.required],
    Genero: ['', Validators.required],
    Fecha_Nacimiento: ['', Validators.required],
    Correo_Electronico: ['', Validators.required],
    ID_Estado: ['', Validators.required],
    ID_Municipio: ['', Validators.required],
    Colonia: ['', Validators.required],
    Codigo_Postal: ['', Validators.required],
    Entrenamiento: ['',],
    Tipo_Entrenamiento: ['',],
    Lesion: ['',],
    Tipo_Lesion: ['',],
    Objetivo: ['',],
    Contrasena: ['', Validators.required],
  });
  estados: any[] = [];
  municipios: any[] = [];
  perfiles: any[] = [];
  option: any = '';
/**
 *
 */
constructor(
  private formBuilder: FormBuilder,
  private usuariosService: UsuariosService,
  private estadosService: EstadosService,
  private municipiosService: MunicipiosService,
  private perfilesService: PerfilesService
  ) {}

ngOnInit(): void {
  this.findEstados();
  this.findPerfiles();

}
findEstados() {
  this.estadosService.getEstados().subscribe((response) => {
    this.estados = response;
    console.log(this.estados);

  })
}
findMunicipios(estadoId: any) {

}

findPerfiles() {
  this.perfilesService.getPerfiles().subscribe((response) => {
    this.perfiles = response;
  });
}

setMunicipios() {
 this.option = document.getElementById('ID_Estado');
 const selectedEstado = this.option.value;
 console.log(selectedEstado);
 this.municipiosService.getMunicipiosByIdEstadoId(selectedEstado).subscribe((response) => {
  this.municipios = response;
  console.log(this.municipios);

})

}
save(form: any) {
console.log(form);
this.usuariosService.saveUsuario(form).subscribe((response) => {
  console.log('creado ', response);

});
}

}
