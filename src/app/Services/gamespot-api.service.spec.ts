import { TestBed } from '@angular/core/testing';

import { GamespotApiService } from './gamespot-api.service';

describe('GamespotApiService', () => {
  let service: GamespotApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamespotApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
