import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueTableHeadComponent } from './league-table-head.component';

describe('LeagueTableHeadComponent', () => {
  let component: LeagueTableHeadComponent;
  let fixture: ComponentFixture<LeagueTableHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueTableHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueTableHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
