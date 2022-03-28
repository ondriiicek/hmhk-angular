import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieU12Component } from './categorie-u12.component';

describe('CategorieU12Component', () => {
  let component: CategorieU12Component;
  let fixture: ComponentFixture<CategorieU12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieU12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieU12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
