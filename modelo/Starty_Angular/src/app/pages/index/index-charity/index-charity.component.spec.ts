import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCharityComponent } from './index-charity.component';

describe('IndexCharityComponent', () => {
  let component: IndexCharityComponent;
  let fixture: ComponentFixture<IndexCharityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexCharityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexCharityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
