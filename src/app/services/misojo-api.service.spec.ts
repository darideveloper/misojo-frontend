import { TestBed } from '@angular/core/testing';

import { MisojoApiService } from './misojo-api.service';

describe('MisojoApiService', () => {
  let service: MisojoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MisojoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
