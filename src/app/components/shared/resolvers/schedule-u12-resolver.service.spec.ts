import { TestBed } from '@angular/core/testing';

import { ScheduleU12ResolverService } from './schedule-u12-resolver.service';

describe('ScheduleU12ResolverService', () => {
  let service: ScheduleU12ResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleU12ResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
