import { TestBed } from '@angular/core/testing';

import { BbapiService } from './bbapi.service';

describe('BbapiService', () => {
  let service: BbapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BbapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
