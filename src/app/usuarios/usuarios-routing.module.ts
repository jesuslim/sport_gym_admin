import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';
import { UsuariosCreateComponent } from './usuarios-create/usuarios-create.component';
import { UsuariosEditComponent } from './usuarios-edit/usuarios-edit.component';

const routes: Routes = [
  { path: 'list', component: UsuariosListComponent },
  { path: 'create', component: UsuariosCreateComponent },
  { path: 'edit/:id', component: UsuariosEditComponent },
  { path: '**', component: UsuariosListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
