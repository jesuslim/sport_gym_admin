import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuarios-details',
  templateUrl: './usuarios-details.component.html',
  styleUrls: ['./usuarios-details.component.css']
})
export class UsuariosDetailsComponent implements OnInit{
  miembroId: string = "";
  miembroInfo: any[] = [];
  /**
   *
   */
  constructor( private activatedRoute: ActivatedRoute, private usuarioService: UsuariosService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.miembroId = params['id'];
    });

    this.findMiembro();
  }

  findMiembro() {
    console.log(' param ',this.miembroId);
    this.usuarioService.getUsuariosById(this.miembroId).subscribe((response) => {
      this.miembroInfo = response;
      console.log(this.miembroInfo);

    });
  }

}
