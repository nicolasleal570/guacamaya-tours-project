import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStatesComponent } from './all-states.component';

describe('AllStatesComponent', () => {
  let component: AllStatesComponent;
  let fixture: ComponentFixture<AllStatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllStatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
