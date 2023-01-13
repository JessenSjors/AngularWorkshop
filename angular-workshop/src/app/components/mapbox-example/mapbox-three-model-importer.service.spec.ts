import { TestBed } from '@angular/core/testing';

import { MapboxThreeModelImporterService } from './mapbox-three-model-importer.service';

describe('MapboxThreeModelImporterService', () => {
  let service: MapboxThreeModelImporterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapboxThreeModelImporterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
