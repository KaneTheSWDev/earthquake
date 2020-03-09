import {Component, OnDestroy, OnInit} from '@angular/core';
import {EarthquakeResponse} from '../../models/earthquakeResponse';
import {Subject} from 'rxjs';
import {EarthquakeService} from '../../services/earthquake.service';

@Component({
  selector: 'app-linear-gauge',
  templateUrl: './linear-gauge.component.html',
  styleUrls: ['./linear-gauge.component.css']
})
export class LinearGaugeComponent implements OnInit, OnDestroy {

  private destroyed$ = new Subject();
  data: EarthquakeResponse;
  public chartData = [];
  view: any[] = [600, 600];

  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Sales';
  timeline = true;
  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
  };
  previousValue;
  private currentLength: number;
  private previousLength: number;

  constructor(private readonly earthquakeService: EarthquakeService) {
  }
  ngOnInit() {
    this.earthquakeService.getEarthquakeData().subscribe(data => {
      this.data = data;
      this.currentLength = data.geometries.length;
      console.log(`current Length ${this.currentLength}`);
      console.log(`previous Length ${this.previousLength}`);
      if (this.previousLength !== this.currentLength) {
        this.previousLength = this.currentLength;
        console.log(`previous Length ${this.previousLength}`);
      }
    });

    this.earthquakeService.refreshEarthquakeData()
      .subscribe();
  }
  //
  // generateChartData() {
  //   for (const p of this.data.properties) {
  //     const temp = {
  //       name: p.place,
  //       value: p.mag
  //     };
  //     this.chartData.push(temp);
  //   }
  // }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }


}
