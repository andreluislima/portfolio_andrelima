import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientOneComponent } from './client-one.component';

describe('ClientOneComponent', () => {
  let component: ClientOneComponent;
  let fixture: ComponentFixture<ClientOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
