import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagos-list',
  templateUrl: './pagos-list.component.html',
  styleUrls: ['./pagos-list.component.css']
})
export class PagosListComponent implements OnInit{

  /**
   *
   */
  constructor( private router: Router) {}

  ngOnInit(): void {

  }

  toCreate() {
    this.router.navigate(['./dashboard/pagos/create']);
  }
}
