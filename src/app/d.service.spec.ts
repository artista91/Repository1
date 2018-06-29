import { TestBed, inject } from '@angular/core/testing';

import { DService } from './d.service';

describe('DService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DService]
    });
  });

  it('should be created', inject([DService], (service: DService) => {
    expect(service).toBeTruthy();
  }));
});
