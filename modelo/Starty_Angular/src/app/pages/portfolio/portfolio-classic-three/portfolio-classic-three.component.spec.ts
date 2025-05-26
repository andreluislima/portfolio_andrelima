import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioClassicThreeComponent } from './portfolio-classic-three.component';

describe('PortfolioClassicThreeComponent', () => {
  let component: PortfolioClassicThreeComponent;
  let fixture: ComponentFixture<PortfolioClassicThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioClassicThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioClassicThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
