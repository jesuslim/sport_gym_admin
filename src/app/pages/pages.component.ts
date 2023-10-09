import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {
  @ViewChild(MatSidenav)

  sidenav!: MatSidenav;

  constructor(
    private observer: BreakpointObserver,
    private cd: ChangeDetectorRef,
    private router: Router
  ) { }

  ngAfterViewInit() {

    this.observer.observe(['(max-width: 800px)']).subscribe((resp: any) => {
      if (resp.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }

    })
    this.cd.detectChanges();
  }

  logOut() {

    Swal.fire({
      title: 'Salir',
      text: "¿Quieres cerrar sesion?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No mejor no'
    }).then((result: any) => {
      if (result.isConfirmed) {
        localStorage.removeItem('ID_Usuario'); // remove sesion on logout
        this.router.navigate(['/login'])
      }
    })
  }
}
