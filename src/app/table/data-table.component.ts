import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {EarthquakeResponse} from '../models/earthquakeResponse';
import {EarthquakeService} from '../services/earthquake.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit, OnDestroy, AfterViewInit {
  data: EarthquakeResponse;
  matTableDataSource;


  displayedColumns: string[] = ['place', 'magnitude', 'time', 'type'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private readonly earthquakeService: EarthquakeService) {
  }

  ngOnInit() {
    this.earthquakeService.getEarthquakeData().subscribe(data => {
      this.data = data;
      this.matTableDataSource = new MatTableDataSource(this.data.properties);
      // this.matTableDataSource.paginator = this.paginator;
      this.setupPagination(data);
    });

  }
  setupPagination(data: any) {
    if (data) {
      this.matTableDataSource.paginator = this.paginator;
    }
  }

  ngAfterViewInit() {
  }

  ngOnDestroy(): void {
  }

}
