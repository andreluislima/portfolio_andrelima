import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamTwoComponent } from './team-two.component';

describe('TeamTwoComponent', () => {
  let component: TeamTwoComponent;
  let fixture: ComponentFixture<TeamTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
