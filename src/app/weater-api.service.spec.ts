import { TestBed } from '@angular/core/testing';

import { WeaterAPIService } from './weater-api.service';

describe('WeaterAPIService', () => {
  let service: WeaterAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeaterAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
