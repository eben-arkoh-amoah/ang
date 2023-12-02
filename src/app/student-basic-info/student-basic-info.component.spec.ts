import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBasicInfoComponent } from './student-basic-info.component';

describe('StudentBasicInfoComponent', () => {
  let component: StudentBasicInfoComponent;
  let fixture: ComponentFixture<StudentBasicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentBasicInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
