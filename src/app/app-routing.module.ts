import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  { path: 'chart', loadChildren: () => import('./charts/charts.module').then(c => c.ChartsModule) },
  { path: 'table', loadChildren: () => import('./table/table.module').then(t => t.TableModule) },
  { path: 'map', loadChildren: () => import('./map/map.module').then(m => m.MapModule)},
  { path: '', redirectTo: '/overview', pathMatch: 'full'},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
