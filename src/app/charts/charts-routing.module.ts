import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LinearGaugeComponent} from './linear-gauge/linear-gauge.component';
import {PieChartComponent} from './pie-chart/pie-chart.component';
import {VerticalChartComponent} from './vertical-chart/vertical-chart.component';
import {PieGridComponent} from './pie-grid/pie-grid.component';


const routes: Routes = [
  {
    path: 'overview', component: LinearGaugeComponent
  },
  {
    path: 'pie', component: PieChartComponent
  },
  {
    path: 'vertical', component: VerticalChartComponent
  },
  {
    path: 'pie-grid', component: PieGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule {
}
