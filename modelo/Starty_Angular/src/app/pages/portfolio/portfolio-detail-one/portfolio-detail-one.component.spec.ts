import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDetailOneComponent } from './portfolio-detail-one.component';

describe('PortfolioDetailOneComponent', () => {
  let component: PortfolioDetailOneComponent;
  let fixture: ComponentFixture<PortfolioDetailOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioDetailOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioDetailOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
