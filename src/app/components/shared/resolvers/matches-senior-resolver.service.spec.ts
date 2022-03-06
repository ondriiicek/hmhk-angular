import { TestBed } from '@angular/core/testing';

import { MatchesSeniorResolverService } from './matches-senior-resolver.service';

describe('MatchesSeniorResolverService', () => {
  let service: MatchesSeniorResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchesSeniorResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
