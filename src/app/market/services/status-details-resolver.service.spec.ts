import { TestBed } from '@angular/core/testing';

import { StatusDetailsResolverService } from './status-details-resolver.service';

describe('StatusDetailsResolverService', () => {
  let service: StatusDetailsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusDetailsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
