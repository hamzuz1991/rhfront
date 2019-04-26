import { TestBed } from '@angular/core/testing';

import { RhserviceService } from './rhservice.service';

describe('RhserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RhserviceService = TestBed.get(RhserviceService);
    expect(service).toBeTruthy();
  });
});
