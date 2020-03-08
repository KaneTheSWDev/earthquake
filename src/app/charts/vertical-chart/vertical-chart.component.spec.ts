import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalChartComponent } from './vertical-chart.component';

describe('VerticalChartComponent', () => {
  let component: VerticalChartComponent;
  let fixture: ComponentFixture<VerticalChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
