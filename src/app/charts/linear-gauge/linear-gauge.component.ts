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
  view: any[] = [600, 450];

  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  timeline = true;
  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
  };



  constructor(private readonly earthquakeService: EarthquakeService) {
  }
  ngOnInit() {
    this.earthquakeService.getEarthquakeData().subscribe(data => {
      this.data = data;
    });

    this.earthquakeService.refreshEarthquakeData()
      .subscribe();
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }


}
