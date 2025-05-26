import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCafeComponent } from './index-cafe.component';

describe('IndexCafeComponent', () => {
  let component: IndexCafeComponent;
  let fixture: ComponentFixture<IndexCafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexCafeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexCafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
