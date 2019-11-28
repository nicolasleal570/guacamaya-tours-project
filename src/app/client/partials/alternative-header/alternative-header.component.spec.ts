import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternativeHeaderComponent } from './alternative-header.component';

describe('AlternativeHeaderComponent', () => {
  let component: AlternativeHeaderComponent;
  let fixture: ComponentFixture<AlternativeHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlternativeHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternativeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
