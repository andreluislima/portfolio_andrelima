import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCreativeTwoComponent } from './portfolio-creative-two.component';

describe('PortfolioCreativeTwoComponent', () => {
  let component: PortfolioCreativeTwoComponent;
  let fixture: ComponentFixture<PortfolioCreativeTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioCreativeTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioCreativeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
