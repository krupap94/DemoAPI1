import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAddReactiveFormComponent } from './student-add-reactive-form.component';

describe('StudentAddReactiveFormComponent', () => {
  let component: StudentAddReactiveFormComponent;
  let fixture: ComponentFixture<StudentAddReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAddReactiveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentAddReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
