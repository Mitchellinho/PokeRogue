import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackChoiceComponent } from './attack-choice.component';

describe('AttackChoiceComponent', () => {
  let component: AttackChoiceComponent;
  let fixture: ComponentFixture<AttackChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttackChoiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttackChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
