import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubImageComponent } from './club-image.component';

describe('ClubImageComponent', () => {
  let component: ClubImageComponent;
  let fixture: ComponentFixture<ClubImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
