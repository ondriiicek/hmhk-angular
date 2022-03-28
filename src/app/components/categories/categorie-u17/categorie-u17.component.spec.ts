import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieU17Component } from './categorie-u17.component';

describe('CategorieU17Component', () => {
  let component: CategorieU17Component;
  let fixture: ComponentFixture<CategorieU17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieU17Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieU17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
