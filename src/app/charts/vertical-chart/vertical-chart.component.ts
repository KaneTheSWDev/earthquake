import {Component, OnDestroy, OnInit} from '@angular/core';
import {EarthquakeService} from '../../services/earthquake.service';
import {Subject} from 'rxjs';
import {EarthquakeResponse} from '../../models/earthquakeResponse';


@Component({
  selector: 'app-vertical-chart',
  templateUrl: './vertical-chart.component.html',
  styleUrls: ['./vertical-chart.component.css']
})
export class VerticalChartComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject();
  data: EarthquakeResponse;
  chartData = [];
  filteredMagnitudes = [];
  filtereddata = [];
  view: any[] = [1000, 700];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Location';
  showYAxisLabel = true;
  yAxisLabel = 'Magnitude';

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

    // find elements where magnitude is > 3.7
    this.filteredMagnitudes = this.data.properties.filter(
      element => element.mag > 3.7
    );
  }
  generateChartData() {
    this.chartData = [];
    for (const p of this.filteredMagnitudes) {
      const temp = {
        name: p.place,
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
