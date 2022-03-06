import { TestBed } from '@angular/core/testing';

import { MatchesU17ResolverService } from './matches-u17-resolver.service';

describe('MatchesU17ResolverService', () => {
  let service: MatchesU17ResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchesU17ResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
