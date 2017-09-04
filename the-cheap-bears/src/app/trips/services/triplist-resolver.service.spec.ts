import { TestBed, inject } from '@angular/core/testing';

import { TriplistResolverService } from './triplist-resolver.service';

describe('TriplistResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TriplistResolverService]
    });
  });

  it('should be created', inject([TriplistResolverService], (service: TriplistResolverService) => {
    expect(service).toBeTruthy();
  }));
});
