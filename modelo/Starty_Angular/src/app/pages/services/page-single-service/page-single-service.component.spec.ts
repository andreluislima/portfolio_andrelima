import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSingleServiceComponent } from './page-single-service.component';

describe('PageSingleServiceComponent', () => {
  let component: PageSingleServiceComponent;
  let fixture: ComponentFixture<PageSingleServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageSingleServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageSingleServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
