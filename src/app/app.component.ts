import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, timer} from 'rxjs';
import {switchMap, takeUntil, tap} from 'rxjs/operators';
import {EarthquakeResponse} from './models/earthquakeResponse';
import {EarthquakeService} from './services/earthquake.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'futurice';
  data: EarthquakeResponse;
  refresh = false;
  today: Date;
  opened = false;

  private destroyed$ = new Subject();

  constructor(private readonly earthquakeService: EarthquakeService) {
  }
  ngOnInit() {
    this.earthquakeService.getEarthquakeData().pipe(
      takeUntil(this.destroyed$)
    ).subscribe(data => {
      this.data = data;
    });

    timer(0, 500000).pipe(
      takeUntil(this.destroyed$),
      tap(() => this.refresh = true),
      switchMap(() =>
        this.earthquakeService.refreshEarthquakeData())
    ).subscribe(() => {
      this.refresh = false;
    });
    this.today = new Date();
  }

  onRefresh() {
    this.refresh = true;
    this.earthquakeService.refreshEarthquakeData().subscribe(() => {
      this.refresh = false;
    });
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
