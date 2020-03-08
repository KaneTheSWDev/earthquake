import {Component, OnDestroy, OnInit} from '@angular/core';
import {EarthquakeResponse} from '../models/earthquakeResponse';
import {EarthquakeService} from '../services/earthquake.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-data-map',
  templateUrl: './data-map.component.html',
  styleUrls: ['./data-map.component.css']
})
export class DataMapComponent implements OnInit, OnDestroy {
  properties: Array<any>;
  geometries: Array<any>;
  zoom = 2;
  lat = -38.416096;
  long = -63.616673;
  public mapData = [];
  data: EarthquakeResponse;
  private destroyed$ = new Subject();


  constructor(private readonly earthquakeService: EarthquakeService) {
  }

  ngOnInit() {
    this.earthquakeService.getEarthquakeData().subscribe(data => {
      this.data = data;
      this.generateMapData();
    });

  }

  generateMapData() {
    this.mapData = [];
    for (const g of this.data.geometries) {
      const tempData: any = {
        latitude: g.coordinates[0],
        longitude: g.coordinates[1],
        draggable: false,
      };
      this.mapData.push(tempData);
    }
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
