import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedHotelComponent } from './selected-hotel.component';

describe('SelectedHotelComponent', () => {
  let component: SelectedHotelComponent;
  let fixture: ComponentFixture<SelectedHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
