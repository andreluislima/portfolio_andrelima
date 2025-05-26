import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectOneComponent } from './project-one.component';

describe('ProjectOneComponent', () => {
  let component: ProjectOneComponent;
  let fixture: ComponentFixture<ProjectOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
