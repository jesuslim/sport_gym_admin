import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

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
  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.usuarios();
  }

  usuarios() {
    this.usuariosService.getUsuarios().subscribe((response) => {
      this.users = response;
      console.log(this.users);

    })
  }

}
