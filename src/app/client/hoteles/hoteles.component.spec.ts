import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelesComponent } from './hoteles.component';

describe('HotelesComponent', () => {
  let component: HotelesComponent;
  let fixture: ComponentFixture<HotelesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
