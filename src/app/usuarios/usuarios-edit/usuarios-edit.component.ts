import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuarios-edit',
  templateUrl: './usuarios-edit.component.html',
  styleUrls: ['./usuarios-edit.component.css']
})
export class UsuariosEditComponent implements OnInit{
  miembroId: string = '';
  miembroInfo: any[] = [];

  /**
   *
   */
  constructor(private activatedRoute: ActivatedRoute, private usuarioService: UsuariosService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.miembroId = params['id'];
    });

    this.findMiembro();
  }

  findMiembro() {
    console.log(' param ',this.miembroId);
    this.usuarioService.getUsuariosById(this.miembroId).subscribe((responce) => {
      this.miembroInfo = responce;
    });

  }

}
