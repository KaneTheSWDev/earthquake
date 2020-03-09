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
  showLegend = false;
  showLabels = true;
  isDoughnut = false;

  filteredData = [];
  selectedMagnitude;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  magnitudes: any[]  = [
   { value: 1, viewValue: '>1' },
   { value: 2, viewValue: '>2' },
   { value: 3, viewValue: '>3' },
   { value: 4, viewValue: '>4' },
   { value: 5, viewValue: '>5' },
 ];

  constructor(private readonly earthquakeService: EarthquakeService) {
  }

  ngOnInit() {
    this.earthquakeService.getEarthquakeData().subscribe(data => {
      this.data = data;
      this.generateChartData();
    });
    this.earthquakeService.refreshEarthquakeData()
      .subscribe();


    this.filteredData = this.data.properties.filter(
      element => element.mag > 3
    );
  }


  generateChartData() {
    this.chartData = [];
    for (const p of this.filteredData) {
      const temp = {
        name: p.place,
        value: p.mag
      };
      this.chartData.push(temp);
    }
  }
  getMagnitudeLevel(event) {
    this.filteredData = this.data.properties.filter(
      element => element.mag > event.value
    );
    this.generateChartData();
  }


  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }


}
