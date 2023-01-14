import { TestBed } from '@angular/core/testing';

import { MapboxHolderService } from './mapbox-holder.service';

describe('MapboxHolderService', () => {
  let service: MapboxHolderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapboxHolderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
