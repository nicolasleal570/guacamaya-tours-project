import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateItinerarioComponent } from './create-itinerario.component';

describe('CreateItinerarioComponent', () => {
  let component: CreateItinerarioComponent;
  let fixture: ComponentFixture<CreateItinerarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateItinerarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateItinerarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
