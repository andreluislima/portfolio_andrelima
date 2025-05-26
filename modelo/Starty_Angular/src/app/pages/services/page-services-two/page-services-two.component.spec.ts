import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageServicesTwoComponent } from './page-services-two.component';

describe('PageServicesTwoComponent', () => {
  let component: PageServicesTwoComponent;
  let fixture: ComponentFixture<PageServicesTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageServicesTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageServicesTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
