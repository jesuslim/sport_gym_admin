import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsistenciasRoutingModule } from './asistencias-routing.module';
import { AsistenciasCreateComponent } from './asistencias-create/asistencias-create.component';
import { AsistenciasEditComponent } from './asistencias-edit/asistencias-edit.component';
import { AsistenciasListComponent } from './asistencias-list/asistencias-list.component';



@NgModule({
  declarations: [
    AsistenciasCreateComponent,
    AsistenciasEditComponent,
    AsistenciasListComponent
  ],
  imports: [
    CommonModule,
    AsistenciasRoutingModule
  ]
})
export class AsistenciasModule { }
