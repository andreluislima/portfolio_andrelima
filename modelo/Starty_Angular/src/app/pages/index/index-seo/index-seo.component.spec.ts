import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSeoComponent } from './index-seo.component';

describe('IndexSeoComponent', () => {
  let component: IndexSeoComponent;
  let fixture: ComponentFixture<IndexSeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexSeoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexSeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
