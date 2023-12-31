import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.css']
})
export class UsuariosListComponent implements OnInit{
  users: any[] = [];
  /**
   *
   */
  constructor( private usuarioService: UsuariosService, private router: Router) {}

  ngOnInit(): void {
    this.usuarios();
  }

  usuarios() {
    console.log('list of users to display');

    this.usuarioService.getUsuarios().subscribe((response) => {
      this.users = response;
      console.log(this.users);

    })
  }


  toCreate() {
    this.router.navigate(['./dashboard/usuarios/create']);
  }
  toEdit(id: string) {
    this.router.navigate(['./dashboard/usuarios/edit/'+id]);
  }
  toDetails(id: string) {
    this.router.navigate(['./dashboard/usuarios/details/'+id]);
  }
  destroy(id: any){

    Swal.fire({
      title: '¿Estas seguro?',
      text: "¿Quieres eliminar este registro?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borralo!',
      cancelButtonText: 'Cancelar'
    }).then((result: any) => {
      if (result.isConfirmed) {

        this.usuarioService.deleteUsuario(id).subscribe((response) => {
          console.log('usuario eliminado');
          this.usuarios();
          Swal.fire(
            'Borrado!',
            'El registro fue eliminado.',
            'success'
          )
        });

      }
    })
  }

}
