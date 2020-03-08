import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {EarthquakeResponse} from '../../models/earthquakeResponse';
import {EarthquakeService} from '../../services/earthquake.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject();
  data: EarthquakeResponse;
  public chartData = [];
  view: any[] = [700, 400];

  // options
  gradient = true;
  showLegend = true;
  showLabels = true;
  isDoughnut = false;
  legendPosition = 'below';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private readonly earthquakeService: EarthquakeService) { }

  ngOnInit() {
    this.earthquakeService.getEarthquakeData().subscribe(data => {
      this.data = data;
      const currLength = data.geometries.length;
      // if (data.geometries.length !== currLength) {
      //   this.previousValue = data.geometries.length;
      // }
      this.generateChartData();
    });
    this.earthquakeService.refreshEarthquakeData()
      .subscribe();
  }

  generateChartData() {
    this.chartData = [];
    for (const p of this.data.properties) {
      const temp = {
        name: 'magnitude',
        value: p.mag
      };
      this.chartData.push(temp);
    }
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
