import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowItinerarioComponent } from './show-itinerario.component';

describe('ShowItinerarioComponent', () => {
  let component: ShowItinerarioComponent;
  let fixture: ComponentFixture<ShowItinerarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowItinerarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowItinerarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
