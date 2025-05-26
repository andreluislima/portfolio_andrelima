import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSaasComponent } from './index-saas.component';

describe('IndexSaasComponent', () => {
  let component: IndexSaasComponent;
  let fixture: ComponentFixture<IndexSaasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexSaasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexSaasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
