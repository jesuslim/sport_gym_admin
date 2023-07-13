import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Router } from '@angular/router';

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
  destroy(){

  }

}
