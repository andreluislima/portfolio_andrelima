import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopGridsComponent } from './shop-grids.component';

describe('ShopGridsComponent', () => {
  let component: ShopGridsComponent;
  let fixture: ComponentFixture<ShopGridsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopGridsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopGridsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
