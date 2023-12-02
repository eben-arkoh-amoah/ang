import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAccountInfoComponent } from './student-account-info.component';

describe('StudentAccountInfoComponent', () => {
  let component: StudentAccountInfoComponent;
  let fixture: ComponentFixture<StudentAccountInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentAccountInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentAccountInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
