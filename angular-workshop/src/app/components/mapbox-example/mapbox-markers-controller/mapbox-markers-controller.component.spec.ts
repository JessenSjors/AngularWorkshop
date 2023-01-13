import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapboxMarkersControllerComponent } from './mapbox-markers-controller.component';

describe('MapboxMarkersControllerComponent', () => {
  let component: MapboxMarkersControllerComponent;
  let fixture: ComponentFixture<MapboxMarkersControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapboxMarkersControllerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapboxMarkersControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
