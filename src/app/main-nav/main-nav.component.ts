import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable, Subject} from 'rxjs';
import {map, shareReplay, takeUntil} from 'rxjs/operators';
import {EarthquakeService} from '../services/earthquake.service';
import {EarthquakeResponse} from '../models/earthquakeResponse';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit, OnDestroy {
  opened = true;
  data: EarthquakeResponse;
  refresh = false;
  today: Date;

  private destroyed$ = new Subject();

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private readonly earthquakeService: EarthquakeService) {}

  ngOnInit() {
    this.earthquakeService.getEarthquakeData().pipe(
      takeUntil(this.destroyed$)
    ).subscribe(data => {
      this.data = data;
    });
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
