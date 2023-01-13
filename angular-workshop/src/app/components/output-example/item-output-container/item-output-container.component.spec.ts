import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemOutputContainerComponent } from './item-output-container.component';

describe('ItemOutputContainerComponent', () => {
  let component: ItemOutputContainerComponent;
  let fixture: ComponentFixture<ItemOutputContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemOutputContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemOutputContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
