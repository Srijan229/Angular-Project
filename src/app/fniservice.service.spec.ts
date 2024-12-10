import { TestBed } from '@angular/core/testing';

import { FniserviceService } from './fniservice.service';

describe('FniserviceService', () => {
  let service: FniserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FniserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
