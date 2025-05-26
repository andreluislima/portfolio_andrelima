import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexEventComponent } from './index-event.component';

describe('IndexEventComponent', () => {
  let component: IndexEventComponent;
  let fixture: ComponentFixture<IndexEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
