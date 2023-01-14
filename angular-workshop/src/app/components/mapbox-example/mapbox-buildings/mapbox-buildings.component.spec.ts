import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapboxBuildingsComponent } from './mapbox-buildings.component';

describe('MapboxBuildingsComponent', () => {
  let component: MapboxBuildingsComponent;
  let fixture: ComponentFixture<MapboxBuildingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapboxBuildingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapboxBuildingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
