import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriePreviewComponent } from './categorie-preview.component';

describe('CategoriePreviewComponent', () => {
  let component: CategoriePreviewComponent;
  let fixture: ComponentFixture<CategoriePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriePreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
