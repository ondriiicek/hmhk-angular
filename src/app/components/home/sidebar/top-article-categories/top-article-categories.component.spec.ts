import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopArticleCategoriesComponent } from './top-article-categories.component';

describe('TopArticleCategoriesComponent', () => {
  let component: TopArticleCategoriesComponent;
  let fixture: ComponentFixture<TopArticleCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopArticleCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopArticleCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
