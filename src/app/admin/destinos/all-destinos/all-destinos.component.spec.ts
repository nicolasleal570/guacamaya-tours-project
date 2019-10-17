import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDestinosComponent } from './all-destinos.component';

describe('AllDestinosComponent', () => {
  let component: AllDestinosComponent;
  let fixture: ComponentFixture<AllDestinosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDestinosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDestinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
