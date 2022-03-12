import { TestBed } from '@angular/core/testing';

import { ScheduleU20ResolverService } from './schedule-u20-resolver.service';

describe('ScheduleU20ResolverService', () => {
  let service: ScheduleU20ResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleU20ResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
