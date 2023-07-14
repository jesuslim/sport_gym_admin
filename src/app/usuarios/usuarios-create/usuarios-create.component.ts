import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-usuarios-create',
  templateUrl: './usuarios-create.component.html',
  styleUrls: ['./usuarios-create.component.css']
})
export class UsuariosCreateComponent implements OnInit{


  usuarioForm= this.formBuilder.group({
    Nombre: '',
    Apellido_Paterno: '',
    Apellido_Materno: '',
    Matricula: '',
    Perfil: '',
    Genero: '',
    Fecha_Nacimiento: '',
    Correo_Electronico: '',
    Estado: '',
    Municipio: '',
    Colonia: '',
    Codigo_Postal: '',
    Entrenamiento: '',
    Tipo_Entrenamiento: '',
    Lesion: '',
    Tipo_Lesion: '',
    Objetivo: '',
    Contrasena: '',
  });
  estados: any[] = [];
  municipios: any[] = [];
  perfiles: any[] = [];
/**
 *
 */
constructor(private formBuilder: FormBuilder,) {}

ngOnInit(): void {

}
save(form: any) {
console.log(form);

}

}
