import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DataMapComponent} from './data-map.component';


const routes: Routes = [
  { path: '', component: DataMapComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule { }
