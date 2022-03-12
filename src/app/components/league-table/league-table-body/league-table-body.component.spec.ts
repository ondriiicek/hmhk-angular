import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueTableBodyComponent } from './league-table-body.component';

describe('LeagueTableBodyComponent', () => {
  let component: LeagueTableBodyComponent;
  let fixture: ComponentFixture<LeagueTableBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueTableBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueTableBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
