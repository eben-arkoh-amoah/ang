import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HNDComponent } from './hnd.component';

describe('HNDComponent', () => {
  let component: HNDComponent;
  let fixture: ComponentFixture<HNDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HNDComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HNDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
