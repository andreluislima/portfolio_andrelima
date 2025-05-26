import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeFooterComponent } from './cafe-footer.component';

describe('CafeFooterComponent', () => {
  let component: CafeFooterComponent;
  let fixture: ComponentFixture<CafeFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CafeFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CafeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
