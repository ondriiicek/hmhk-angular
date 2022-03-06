import { TestBed } from '@angular/core/testing';

import { MatchesU12ResolverService } from './matches-u12-resolver.service';

describe('MatchesU12ResolverService', () => {
  let service: MatchesU12ResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchesU12ResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
