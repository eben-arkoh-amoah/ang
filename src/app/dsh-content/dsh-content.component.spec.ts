import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DshContentComponent } from './dsh-content.component';

describe('DshContentComponent', () => {
  let component: DshContentComponent;
  let fixture: ComponentFixture<DshContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DshContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DshContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
