import { TestBed } from '@angular/core/testing';

import { UrlLookupService } from './url-lookup.service';

describe('UrlLookupService', () => {
  let service: UrlLookupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlLookupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
