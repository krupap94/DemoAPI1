import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEditReactiveFormComponent } from './student-edit-reactive-form.component';

describe('StudentEditReactiveFormComponent', () => {
  let component: StudentEditReactiveFormComponent;
  let fixture: ComponentFixture<StudentEditReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentEditReactiveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentEditReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
