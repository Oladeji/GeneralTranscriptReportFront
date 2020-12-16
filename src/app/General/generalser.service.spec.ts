import { TestBed, inject } from '@angular/core/testing';

import { GeneralserService } from './generalser.service';

describe('GeneralserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeneralserService]
    });
  });

  it('should be created', inject([GeneralserService], (service: GeneralserService) => {
    expect(service).toBeTruthy();
  }));
});
