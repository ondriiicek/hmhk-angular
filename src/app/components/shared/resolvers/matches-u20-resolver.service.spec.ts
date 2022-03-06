import { TestBed } from '@angular/core/testing';

import { MatchesU20ResolverService } from './matches-u20-resolver.service';

describe('MatchesU20ResolverService', () => {
  let service: MatchesU20ResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchesU20ResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
