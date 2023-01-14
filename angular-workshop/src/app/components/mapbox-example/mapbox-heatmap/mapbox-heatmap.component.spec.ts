import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapboxHeatmapComponent } from './mapbox-heatmap.component';

describe('MapboxHeatmapComponent', () => {
  let component: MapboxHeatmapComponent;
  let fixture: ComponentFixture<MapboxHeatmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapboxHeatmapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapboxHeatmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
