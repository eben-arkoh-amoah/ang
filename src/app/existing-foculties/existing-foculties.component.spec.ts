import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingFocultiesComponent } from './existing-foculties.component';

describe('ExistingFocultiesComponent', () => {
  let component: ExistingFocultiesComponent;
  let fixture: ComponentFixture<ExistingFocultiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExistingFocultiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExistingFocultiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
