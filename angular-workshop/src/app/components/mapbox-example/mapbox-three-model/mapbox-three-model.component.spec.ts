import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapboxThreeModelComponent } from './mapbox-three-model.component';

describe('MapboxThreeModelComponent', () => {
  let component: MapboxThreeModelComponent;
  let fixture: ComponentFixture<MapboxThreeModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapboxThreeModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapboxThreeModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
