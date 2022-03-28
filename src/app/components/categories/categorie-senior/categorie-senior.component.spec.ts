import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieSeniorComponent } from './categorie-senior.component';

describe('CategorieSeniorComponent', () => {
  let component: CategorieSeniorComponent;
  let fixture: ComponentFixture<CategorieSeniorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieSeniorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieSeniorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
