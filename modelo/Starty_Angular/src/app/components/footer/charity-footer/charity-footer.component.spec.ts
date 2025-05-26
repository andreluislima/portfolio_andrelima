import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharityFooterComponent } from './charity-footer.component';

describe('CharityFooterComponent', () => {
  let component: CharityFooterComponent;
  let fixture: ComponentFixture<CharityFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharityFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharityFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
