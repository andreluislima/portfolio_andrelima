import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexFashionComponent } from './index-fashion.component';

describe('IndexFashionComponent', () => {
  let component: IndexFashionComponent;
  let fixture: ComponentFixture<IndexFashionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexFashionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexFashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
