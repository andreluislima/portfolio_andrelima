import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSingleItemComponent } from './client-single-item.component';

describe('ClientSingleItemComponent', () => {
  let component: ClientSingleItemComponent;
  let fixture: ComponentFixture<ClientSingleItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientSingleItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientSingleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
