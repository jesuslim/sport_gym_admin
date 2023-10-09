import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { EstadosService } from 'src/app/services/estados.service';
import { LicenciaturasService } from 'src/app/services/licenciaturas.service';
import { MunicipiosService } from 'src/app/services/municipios.service';
import { PerfilesService } from 'src/app/services/perfiles.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios-create',
  templateUrl: './usuarios-create.component.html',
  styleUrls: ['./usuarios-create.component.css']
})
export class UsuariosCreateComponent implements OnInit {

  usuarioForm: FormGroup;

  estados: any[] = [];
  municipios: any[] = [];
  perfiles: any[] = [];
  option: any = '';
  licenciaturas: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private usuariosService: UsuariosService,
    private estadosService: EstadosService,
    private municipiosService: MunicipiosService,
    private perfilesService: PerfilesService,
    private licenciaturasService: LicenciaturasService,
    private router: Router
  ) {
    // Inicializamos el formulario aquí con las validaciones necesarias
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
    },
      {
        // Validación personalizada para comparar la contraseña y la confirmación
        validators: this.passwordMatchValidator,
      });
  }

  ngOnInit(): void {
    this.findEstados();
    this.findPerfiles();
    this.findLicenciaturas();
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
  findLicenciaturas() {
    this.licenciaturasService.getLicenciatura().subscribe(
      (responce) => {
        this.licenciaturas = responce;
      });
  }

  // Función de validación personalizada para comparar contraseña y confirmación
  passwordMatchValidator(control: AbstractControl): { mismatch: boolean } {
    const password = control.get('Contrasena')?.value;
    const confirmPassword = control.get('ConfirmarContrasena')?.value;

    if (password !== confirmPassword) {
      return { mismatch: true };
    }

    return { mismatch: false };
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

  save(form: any) {

    if (this.usuarioForm.valid) {

      this.usuariosService.saveUsuario(form).subscribe(
        (response) => {
          console.log('creado ', response);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Miembro registrado con exito',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            this.router.navigate(['./dashboard/usuarios/list']);
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
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Llena todos los campos obligatotios',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        this.usuarioForm.markAllAsTouched()
      })
    }
    console.log(form);
  }

}
