import { TestBed } from '@angular/core/testing';

import { HelperTvshowsService } from './helper-tvshows.service';

describe('HelperTvshowsService', () => {
  let service: HelperTvshowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelperTvshowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
