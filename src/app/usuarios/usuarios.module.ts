import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';
import { UsuariosCreateComponent } from './usuarios-create/usuarios-create.component';
import { UsuariosEditComponent } from './usuarios-edit/usuarios-edit.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';



@NgModule({
  declarations: [
    UsuariosListComponent,
    UsuariosCreateComponent,
    UsuariosEditComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
