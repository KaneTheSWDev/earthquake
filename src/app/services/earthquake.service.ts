import { Injectable } from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {EarthquakeResponse} from '../models/earthquakeResponse';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EarthquakeService {
  url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';

  private _earthquakeData$ = new ReplaySubject<EarthquakeResponse>(1);


  constructor(private readonly httpClient: HttpClient) {
  }


  getEarthquakeData(): Observable<EarthquakeResponse> {
    // return the subject here
    // subscribers will will notified when the data is refreshed
    return this._earthquakeData$.asObservable();
  }

  refreshEarthquakeData(): Observable<void> {
    return this.httpClient.get<any>(this.url).pipe(
      tap(response => {
        // notify all subscribers of new data
        this._earthquakeData$.next({
          geometries: response.features.map(x => x.geometry),
          properties: response.features.map(x => x.properties)
        });
      })
    );

  }

}
