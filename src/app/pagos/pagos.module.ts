import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagosRoutingModule } from './pagos-routing.module';
import { PagosCreateComponent } from './pagos-create/pagos-create.component';
import { PagosEditComponent } from './pagos-edit/pagos-edit.component';
import { PagosListComponent } from './pagos-list/pagos-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PagosCreateComponent,
    PagosEditComponent,
    PagosListComponent
  ],
  imports: [
    CommonModule,
    PagosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagosModule { }
