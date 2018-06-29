import { TestBed, inject } from '@angular/core/testing';

import { MyDateService } from './my-date.service';

describe('MyDateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyDateService]
    });
  });

  it('should be created', inject([MyDateService], (service: MyDateService) => {
    expect(service).toBeTruthy();
  }));
});
