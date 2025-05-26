import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexRestaurantComponent } from './index-restaurant.component';

describe('IndexRestaurantComponent', () => {
  let component: IndexRestaurantComponent;
  let fixture: ComponentFixture<IndexRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexRestaurantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
