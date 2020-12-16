import { TestBed } from '@angular/core/testing';

import { ImportserService } from './importser.service';

describe('ImportserService', () => {
  let service: ImportserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImportserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
