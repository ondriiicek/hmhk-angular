import { TestBed } from '@angular/core/testing';

import { ArticlesResolverService } from './articles-resolver.service';

describe('ArticlesResolverService', () => {
  let service: ArticlesResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticlesResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
