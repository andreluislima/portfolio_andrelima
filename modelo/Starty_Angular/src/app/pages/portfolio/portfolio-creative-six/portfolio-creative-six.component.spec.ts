import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCreativeSixComponent } from './portfolio-creative-six.component';

describe('PortfolioCreativeSixComponent', () => {
  let component: PortfolioCreativeSixComponent;
  let fixture: ComponentFixture<PortfolioCreativeSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioCreativeSixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioCreativeSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
