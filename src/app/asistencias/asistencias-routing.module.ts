import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AsistenciasListComponent } from './asistencias-list/asistencias-list.component';
import { AsistenciasCreateComponent } from './asistencias-create/asistencias-create.component';
import { AsistenciasEditComponent } from './asistencias-edit/asistencias-edit.component';

const routes: Routes = [
  { path:'list', component: AsistenciasListComponent },
  { path:'create', component: AsistenciasCreateComponent },
  { path:'edit/:id', component: AsistenciasEditComponent },
  { path:'**', component: AsistenciasListComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AsistenciasRoutingModule { }
