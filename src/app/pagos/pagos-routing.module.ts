import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagosListComponent } from './pagos-list/pagos-list.component';
import { PagosCreateComponent } from './pagos-create/pagos-create.component';
import { PagosEditComponent } from './pagos-edit/pagos-edit.component';

const routes: Routes = [
  { path:'list', component : PagosListComponent },
  { path:'create', component : PagosCreateComponent },
  { path:'edit/:1', component : PagosEditComponent },
  { path:'**', component : PagosListComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PagosRoutingModule { }
