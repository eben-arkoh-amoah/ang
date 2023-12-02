import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffAcntStngsComponent } from './staff-acnt-stngs.component';

describe('StaffAcntStngsComponent', () => {
  let component: StaffAcntStngsComponent;
  let fixture: ComponentFixture<StaffAcntStngsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffAcntStngsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaffAcntStngsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
