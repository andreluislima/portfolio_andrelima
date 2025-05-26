import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageComingsoonComponent } from './page-comingsoon.component';

describe('PageComingsoonComponent', () => {
  let component: PageComingsoonComponent;
  let fixture: ComponentFixture<PageComingsoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageComingsoonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageComingsoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
