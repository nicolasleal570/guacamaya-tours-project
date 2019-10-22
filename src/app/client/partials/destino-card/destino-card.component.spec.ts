import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinoCardComponent } from './destino-card.component';

describe('DestinoCardComponent', () => {
  let component: DestinoCardComponent;
  let fixture: ComponentFixture<DestinoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
