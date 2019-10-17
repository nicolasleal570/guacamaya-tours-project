import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDestinoComponent } from './create-destino.component';

describe('CreateDestinoComponent', () => {
  let component: CreateDestinoComponent;
  let fixture: ComponentFixture<CreateDestinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDestinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
