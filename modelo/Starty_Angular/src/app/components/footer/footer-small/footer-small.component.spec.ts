import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSmallComponent } from './footer-small.component';

describe('FooterSmallComponent', () => {
  let component: FooterSmallComponent;
  let fixture: ComponentFixture<FooterSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterSmallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
