import { TestBed, inject } from '@angular/core/testing';

import { UserCarService } from './user-car.service';

describe('UserCarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserCarService]
    });
  });

  it('should be created', inject([UserCarService], (service: UserCarService) => {
    expect(service).toBeTruthy();
  }));
});
