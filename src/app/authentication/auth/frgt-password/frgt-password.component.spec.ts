import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrgtPasswordComponent } from './frgt-password.component';

describe('FrgtPasswordComponent', () => {
  let component: FrgtPasswordComponent;
  let fixture: ComponentFixture<FrgtPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrgtPasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrgtPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
