import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqThreeComponent } from './faq-three.component';

describe('FaqThreeComponent', () => {
  let component: FaqThreeComponent;
  let fixture: ComponentFixture<FaqThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
