import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapboxStyleSwitcherComponent } from './mapbox-style-switcher.component';

describe('MapboxStyleSwitcherComponent', () => {
  let component: MapboxStyleSwitcherComponent;
  let fixture: ComponentFixture<MapboxStyleSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapboxStyleSwitcherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapboxStyleSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
