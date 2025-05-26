import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoTaglineComponent } from './crypto-tagline.component';

describe('CryptoTaglineComponent', () => {
  let component: CryptoTaglineComponent;
  let fixture: ComponentFixture<CryptoTaglineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CryptoTaglineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoTaglineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
