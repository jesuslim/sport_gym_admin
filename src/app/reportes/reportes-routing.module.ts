import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReportesViewComponent } from './reportes-view/reportes-view.component';

const routes: Routes = [
  { path:'view', component : ReportesViewComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ReportesRoutingModule { }
