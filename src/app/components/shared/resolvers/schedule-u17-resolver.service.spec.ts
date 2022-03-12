import { TestBed } from '@angular/core/testing';

import { ScheduleU17ResolverService } from './schedule-u17-resolver.service';

describe('ScheduleU17ResolverService', () => {
  let service: ScheduleU17ResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleU17ResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
