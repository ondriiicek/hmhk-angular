import { TestBed } from '@angular/core/testing';

import { ScheduleSeniorResolverService } from './schedule-senior-resolver.service';

describe('ScheduleSeniorResolverService', () => {
  let service: ScheduleSeniorResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleSeniorResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
