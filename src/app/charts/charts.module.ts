import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LinearGaugeComponent } from './linear-gauge/linear-gauge.component';
import { VerticalChartComponent } from './vertical-chart/vertical-chart.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { PieGridComponent } from './pie-grid/pie-grid.component';
import {FlexModule} from '@angular/flex-layout';


@NgModule({
  declarations: [PieChartComponent, LinearGaugeComponent, VerticalChartComponent, PieGridComponent],
  exports: [
    LinearGaugeComponent
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    NgxChartsModule,
    FlexModule,

  ]
})
export class ChartsModule { }
