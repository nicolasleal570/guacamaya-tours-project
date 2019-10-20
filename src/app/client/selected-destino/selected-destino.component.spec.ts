import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedDestinoComponent } from './selected-destino.component';

describe('SelectedDestinoComponent', () => {
  let component: SelectedDestinoComponent;
  let fixture: ComponentFixture<SelectedDestinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedDestinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
