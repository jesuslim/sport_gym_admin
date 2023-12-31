import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authForm = this.formBuilder.group({
    Correo_Electronico: ['', Validators.required],
    Contrasena: ['', Validators.required],
  })

  sesion: any;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService

  ) { }

  ngOnInit(): void {
    this.sesion = localStorage.getItem("ID_Usuario");
    if (this.sesion) {
      this.router.navigate(['dashboard/usuarios/list']);
    }

  }
  login(form: any) {
    if (this.authForm.valid) {
      this.authService.loginAuth(form).subscribe(
        (response) => {
          localStorage.setItem("ID_Usuario", response['ID_Miembro']);
          this.router.navigate(['dashboard/usuarios/list']);
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
        title: 'Llena todos los campos',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        this.authForm.markAllAsTouched();
      }
      )
    }
  }
}
