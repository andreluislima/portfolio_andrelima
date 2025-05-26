import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCorporateComponent } from './index-corporate.component';

describe('IndexCorporateComponent', () => {
  let component: IndexCorporateComponent;
  let fixture: ComponentFixture<IndexCorporateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexCorporateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexCorporateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
