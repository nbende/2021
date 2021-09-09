import { TestBed } from '@angular/core/testing';

import { ComplaintSeviceService } from './complaint-sevice.service';

describe('ComplaintSeviceService', () => {
  let service: ComplaintSeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplaintSeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
