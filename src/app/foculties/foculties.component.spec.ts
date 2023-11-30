import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocultiesComponent } from './foculties.component';

describe('FocultiesComponent', () => {
  let component: FocultiesComponent;
  let fixture: ComponentFixture<FocultiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FocultiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FocultiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
