import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioModernSidebarComponent } from './portfolio-modern-sidebar.component';

describe('PortfolioModernSidebarComponent', () => {
  let component: PortfolioModernSidebarComponent;
  let fixture: ComponentFixture<PortfolioModernSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioModernSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioModernSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
