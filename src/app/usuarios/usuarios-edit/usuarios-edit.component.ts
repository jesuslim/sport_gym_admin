import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EstadosService } from 'src/app/services/estados.service';
import { MunicipiosService } from 'src/app/services/municipios.service';
import { PerfilesService } from 'src/app/services/perfiles.service';
import Swal from 'sweetalert2';
import { LicenciaturasService } from 'src/app/services/licenciaturas.service';

@Component({
  selector: 'app-usuarios-edit',
  templateUrl: './usuarios-edit.component.html',
  styleUrls: ['./usuarios-edit.component.css']
})
export class UsuariosEditComponent implements OnInit {
  miembroId: string = '';
  miembroInfo: any[] = [];
  estados: any[] = [];
  municipios: any[] = [];
  perfiles: any[] = [];
  option: any = '';
  licenciaturas: any[] = [];

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
    private licenciaturasService: LicenciaturasService,
    private perfilesService: PerfilesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.miembroId = params['id'];
    });

    this.usuarioForm = this.formBuilder.group({
      Nombre: ['', Validators.required],
      Apellido_Paterno: ['', Validators.required],
      Apellido_Materno: ['', Validators.required],
      Matricula: ['', [Validators.required, Validators.pattern(/^[0-9]{2}[A-Z]{2}[0-9]{7}$/)]],
      ID_Perfil: ['', Validators.required],
      ID_Licenciaturas: ['', Validators.required],
      Genero: ['', Validators.required],
      Fecha_Nacimiento: ['', Validators.required],
      Correo_Electronico: ['', Validators.required],
      ID_Estado: ['', Validators.required],
      ID_Municipio: ['', Validators.required],
      Colonia: ['', Validators.required],
      Codigo_Postal: ['', Validators.required],
      Entrenamiento: [''],
      Tipo_Entrenamiento: [''],
      Lesion: [''],
      Tipo_Lesion: [''],
      Objetivo: [''],
      Contrasena: ['', Validators.required],
      ConfirmarContrasena: ['', Validators.required],
    });

    this.municipiosService.getMunipios().subscribe((response) => {
      this.municipios = response;
      console.log(this.municipios);

    })

    this.findMiembro();
    this.findEstados();
    this.findPerfiles();
    this.findLicenciaturas();

  }

  findMiembro() {
    console.log(' param ', this.miembroId);
    this.usuarioService.getUsuariosById(this.miembroId).subscribe((responce) => {
      this.miembroInfo = responce;
      console.log('miembro info ', this.miembroInfo[0]);
      this.usuarioForm.controls['Nombre'].setValue(this.miembroInfo[0].Nombre)
      this.usuarioForm.controls['Apellido_Paterno'].setValue(this.miembroInfo[0].Apellido_Paterno)
      this.usuarioForm.controls['Apellido_Materno'].setValue(this.miembroInfo[0].Apellido_Materno)
      this.usuarioForm.controls['Matricula'].setValue(this.miembroInfo[0].Matricula)
      this.usuarioForm.controls['ID_Perfil'].setValue(this.miembroInfo[0].ID_Perfil)
      this.usuarioForm.controls['ID_Licenciaturas'].setValue(this.miembroInfo[0].ID_Licenciaturas)
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

  findLicenciaturas() {
    this.licenciaturasService.getLicenciatura().subscribe(
      (responce) => {
        this.licenciaturas = responce;
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

  limitarLongitudYNumeros(event: any) {
    const input = event.target;
    const inputValue = input.value;

    // Remover caracteres que no sean números
    const numericValue = inputValue.replace(/[^0-9]/g, '');

    // Limitar la longitud a 5 caracteres
    const limitedValue = numericValue.slice(0, 5);

    // Actualizar el valor del campo
    input.value = limitedValue;

    // Actualizar el valor en el formulario (si es necesario)
    this.usuarioForm.get('Codigo_Postal')?.setValue(limitedValue);
  }

  validarNoNumerico(event: any) {
    const input = event.target;
    const inputValue = input.value;

    // Remover dígitos numéricos
    const nonNumericValue = inputValue.replace(/[0-9]/g, '');

    // Actualizar el valor del campo
    input.value = nonNumericValue;
  }

  update(form: any) {
    console.log('edit', form);
    form.ID_Miembro = this.miembroId;
    this.usuarioService.updateUsuarios(form).subscribe(
      (response) => {
        console.log('creado ', response);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Miembro actualizado con exito',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          this.router.navigate(['./dashboard/usuarios/list']).then(() => {
            window.location.reload();
          })
        })
      },
      (err) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: err.error.messages.error,
          showConfirmButton: false,
          timer: 1500
        })
      });
  }

}
