import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantFooterComponent } from './restaurant-footer.component';

describe('RestaurantFooterComponent', () => {
  let component: RestaurantFooterComponent;
  let fixture: ComponentFixture<RestaurantFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
