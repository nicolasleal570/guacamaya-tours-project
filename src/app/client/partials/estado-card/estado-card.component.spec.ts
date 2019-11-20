import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoCardComponent } from './estado-card.component';

describe('EstadoCardComponent', () => {
  let component: EstadoCardComponent;
  let fixture: ComponentFixture<EstadoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
