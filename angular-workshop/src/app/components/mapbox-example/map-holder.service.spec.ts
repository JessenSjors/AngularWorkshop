import { TestBed } from '@angular/core/testing';

import { MapHolderService } from './map-holder.service';

describe('MapHolderService', () => {
  let service: MapHolderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapHolderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
