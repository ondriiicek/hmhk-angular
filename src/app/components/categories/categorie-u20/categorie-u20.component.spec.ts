import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieU20Component } from './categorie-u20.component';

describe('CategorieU20Component', () => {
  let component: CategorieU20Component;
  let fixture: ComponentFixture<CategorieU20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieU20Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieU20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
