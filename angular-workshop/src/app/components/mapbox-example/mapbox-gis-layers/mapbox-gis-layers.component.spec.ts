import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapboxGisLayersComponent } from './mapbox-gis-layers.component';

describe('MapboxGisLayersComponent', () => {
  let component: MapboxGisLayersComponent;
  let fixture: ComponentFixture<MapboxGisLayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapboxGisLayersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapboxGisLayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
