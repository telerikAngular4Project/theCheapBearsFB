import { TestBed, inject } from '@angular/core/testing';

import { TripsResolverService } from './trips-resolver.service';

describe('TripsResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TripsResolverService]
    });
  });

  it('should be created', inject([TripsResolverService], (service: TripsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
