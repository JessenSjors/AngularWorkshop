import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeThreejsComponent } from './cube-threejs.component';

describe('CubeThreejsComponent', () => {
  let component: CubeThreejsComponent;
  let fixture: ComponentFixture<CubeThreejsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CubeThreejsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CubeThreejsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
