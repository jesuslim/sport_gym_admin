import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagosService } from 'src/app/services/pagos.service';

@Component({
  selector: 'app-pagos-list',
  templateUrl: './pagos-list.component.html',
  styleUrls: ['./pagos-list.component.css']
})
export class PagosListComponent implements OnInit{

  /**
   *
   */
  constructor(
    private router: Router,
    private pagosService: PagosService
    ) {}
  pagos: any[] = [];
  ngOnInit(): void {
this.findPagos();
  }

  findPagos() {
    this.pagosService.getPagos().subscribe((response) => {
      this.pagos = response;
      console.log('pagos', this.pagos);

    });
  }


  toCreate() {
    this.router.navigate(['./dashboard/pagos/create']);
  }
}
