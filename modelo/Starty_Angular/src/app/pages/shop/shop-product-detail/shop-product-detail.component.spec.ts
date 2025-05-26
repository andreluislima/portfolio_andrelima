import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopProductDetailComponent } from './shop-product-detail.component';

describe('ShopProductDetailComponent', () => {
  let component: ShopProductDetailComponent;
  let fixture: ComponentFixture<ShopProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopProductDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
