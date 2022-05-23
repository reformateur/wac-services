import { TestBed } from '@angular/core/testing';

import { GetinTouchService } from './getin-touch.service';

describe('GetinTouchService', () => {
  let service: GetinTouchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetinTouchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
