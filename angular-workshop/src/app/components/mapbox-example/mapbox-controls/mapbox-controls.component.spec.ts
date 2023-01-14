import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapboxControlsComponent } from './mapbox-controls.component';

describe('MapboxControlsComponent', () => {
  let component: MapboxControlsComponent;
  let fixture: ComponentFixture<MapboxControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapboxControlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapboxControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
