import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerTabComponent } from './freelancer-tab.component';

describe('FreelancerTabComponent', () => {
  let component: FreelancerTabComponent;
  let fixture: ComponentFixture<FreelancerTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreelancerTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreelancerTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
