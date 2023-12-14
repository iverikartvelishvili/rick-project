import { TestBed } from '@angular/core/testing';

import { RockyserviceService } from './rockyservice.service';

describe('RockyserviceService', () => {
  let service: RockyserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RockyserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
