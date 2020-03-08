import { TestBed } from '@angular/core/testing';

import { EarthquakeService } from './earthquake.service';

describe('EarthquakeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EarthquakeService = TestBed.get(EarthquakeService);
    expect(service).toBeTruthy();
  });
});
