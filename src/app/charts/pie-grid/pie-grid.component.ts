import {Component, OnDestroy, OnInit} from '@angular/core';
import {EarthquakeService} from '../../services/earthquake.service';
import {EarthquakeResponse} from '../../models/earthquakeResponse';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-pie-grid',
  templateUrl: './pie-grid.component.html',
  styleUrls: ['./pie-grid.component.css']
})
export class PieGridComponent implements OnInit, OnDestroy {
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

  constructor(private readonly earthquakeService: EarthquakeService) {
  }

  ngOnInit() {
    this.earthquakeService.getEarthquakeData().subscribe(data => {
      this.data = data;
      this.generateChartData();
    });
    this.earthquakeService.refreshEarthquakeData()
      .subscribe();
  }

  generateChartData() {
    this.chartData = [];
    for (const p of this.data.properties) {
      const temp = {
        name: p.magType,
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
