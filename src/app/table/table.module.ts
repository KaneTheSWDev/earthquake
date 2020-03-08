import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { DataTableComponent } from './data-table.component';
import {MatPaginatorModule, MatSortModule, MatTableModule} from '@angular/material';


@NgModule({
  declarations: [DataTableComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class TableModule { }
