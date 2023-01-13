import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicThreejsComponent } from './basic-threejs.component';

describe('BasicThreejsComponent', () => {
  let component: BasicThreejsComponent;
  let fixture: ComponentFixture<BasicThreejsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicThreejsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicThreejsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
