import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EstadosService } from 'src/app/services/estados.service';
import { MunicipiosService } from 'src/app/services/municipios.service';
import { PerfilesService } from 'src/app/services/perfiles.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-usuarios-edit',
  templateUrl: './usuarios-edit.component.html',
  styleUrls: ['./usuarios-edit.component.css']
})
export class UsuariosEditComponent implements OnInit{
  miembroId: string = '';
  miembroInfo: any[] = [];
  estados: any[] = [];
  municipios: any[] = [];
  perfiles: any[] = [];
  option: any = '';

  usuarioForm: FormGroup = new FormGroup({})


  /**
   *
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    private usuarioService: UsuariosService,
    private formBuilder: FormBuilder,
    private estadosService: EstadosService,
    private municipiosService: MunicipiosService,
    private perfilesService: PerfilesService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.miembroId = params['id'];
    });

    this.usuarioForm = new FormGroup({
    Nombre: new FormControl('', Validators.required),
    Apellido_Paterno: new FormControl('', Validators.required),
    Apellido_Materno: new FormControl('', Validators.required),
    Matricula: new FormControl('', Validators.required),
    ID_Perfil: new FormControl('', Validators.required),
    Genero: new FormControl('', Validators.required),
    Fecha_Nacimiento: new FormControl('', Validators.required),
    Correo_Electronico: new FormControl('', Validators.required),
    ID_Estado: new FormControl('', Validators.required),
    ID_Municipio: new FormControl('', Validators.required),
    Colonia: new FormControl('', Validators.required),
    Codigo_Postal: new FormControl('', Validators.required),
    Entrenamiento: new FormControl(''),
    Tipo_Entrenamiento: new FormControl(''),
    Lesion: new FormControl(''),
    Tipo_Lesion: new FormControl(''),
    Objetivo: new FormControl(''),
    Contrasena: new FormControl('', Validators.required),
    ID_Miembro: new FormControl(''),
  });

  this.municipiosService.getMunipios().subscribe((response) => {
    this.municipios = response;
    console.log(this.municipios);

  })

    this.findMiembro();
    this.findEstados();
    this.findPerfiles();
  }

  findMiembro() {
    console.log(' param ',this.miembroId);
    this.usuarioService.getUsuariosById(this.miembroId).subscribe((responce) => {
      this.miembroInfo = responce;
      console.log('miembro info ', this.miembroInfo[0]);
      this.usuarioForm.controls['Nombre'].setValue(this.miembroInfo[0].Nombre)
      this.usuarioForm.controls['Apellido_Paterno'].setValue(this.miembroInfo[0].Apellido_Paterno)
      this.usuarioForm.controls['Apellido_Materno'].setValue(this.miembroInfo[0].Apellido_Materno)
      this.usuarioForm.controls['Matricula'].setValue(this.miembroInfo[0].Matricula)
      this.usuarioForm.controls['ID_Perfil'].setValue(this.miembroInfo[0].ID_Perfil)
      this.usuarioForm.controls['Genero'].setValue(this.miembroInfo[0].Genero)
      this.usuarioForm.controls['Fecha_Nacimiento'].setValue(this.miembroInfo[0].Fecha_Nacimiento)
      this.usuarioForm.controls['Correo_Electronico'].setValue(this.miembroInfo[0].Correo_Electronico)
      this.usuarioForm.controls['ID_Estado'].setValue(this.miembroInfo[0].ID_Estado)
      this.usuarioForm.controls['ID_Municipio'].setValue(this.miembroInfo[0].ID_Municipio)
      this.usuarioForm.controls['Colonia'].setValue(this.miembroInfo[0].Colonia)
      this.usuarioForm.controls['Codigo_Postal'].setValue(this.miembroInfo[0].Codigo_Postal)
      this.usuarioForm.controls['Entrenamiento'].setValue(this.miembroInfo[0].Entrenamiento)
      this.usuarioForm.controls['Tipo_Entrenamiento'].setValue(this.miembroInfo[0].Tipo_Entrenamiento)
      this.usuarioForm.controls['Lesion'].setValue(this.miembroInfo[0].Lesion)
      this.usuarioForm.controls['Tipo_Lesion'].setValue(this.miembroInfo[0].Tipo_Lesion)
      this.usuarioForm.controls['Objetivo'].setValue(this.miembroInfo[0].Objetivo)
      this.usuarioForm.controls['ID_Miembro'].setValue(this.miembroInfo[0].ID_Miembro)

    });
  }

  editForm() {
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

  update(form: any) {
    this.usuarioService.updateUsuarios(form).subscribe((response) => {
      console.log('creado ', response);
    // TODO: Implement sweetAlert2 npm installation already made
      this.router.navigate(['./dashboard/usuarios/list']).then(() => {
        window.location.reload();
      });
    });
  }

}
