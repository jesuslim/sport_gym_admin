import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';
import { UsuariosCreateComponent } from './usuarios-create/usuarios-create.component';
import { UsuariosEditComponent } from './usuarios-edit/usuarios-edit.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UsuariosDetailsComponent } from './usuarios-details/usuarios-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    UsuariosListComponent,
    UsuariosCreateComponent,
    UsuariosEditComponent,
    UsuariosDetailsComponent,

  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    HttpClientModule,
    RouterModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class UsuariosModule { }
