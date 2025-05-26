import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCreativeFourComponent } from './portfolio-creative-four.component';

describe('PortfolioCreativeFourComponent', () => {
  let component: PortfolioCreativeFourComponent;
  let fixture: ComponentFixture<PortfolioCreativeFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioCreativeFourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioCreativeFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
