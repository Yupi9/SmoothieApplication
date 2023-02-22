import { TestBed } from '@angular/core/testing';

import { SmoothieService } from './smoothie.service';

describe('SmoothieService', () => {
  let service: SmoothieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmoothieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
