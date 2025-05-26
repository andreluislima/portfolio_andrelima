import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioMasonrySidebarComponent } from './portfolio-masonry-sidebar.component';

describe('PortfolioMasonrySidebarComponent', () => {
  let component: PortfolioMasonrySidebarComponent;
  let fixture: ComponentFixture<PortfolioMasonrySidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioMasonrySidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioMasonrySidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
