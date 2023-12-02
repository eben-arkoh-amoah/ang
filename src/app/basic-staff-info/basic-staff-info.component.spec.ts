import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicStaffInfoComponent } from './basic-staff-info.component';

describe('BasicStaffInfoComponent', () => {
  let component: BasicStaffInfoComponent;
  let fixture: ComponentFixture<BasicStaffInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicStaffInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicStaffInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
