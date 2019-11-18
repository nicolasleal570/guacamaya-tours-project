import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigLoaderComponent } from './big-loader.component';

describe('BigLoaderComponent', () => {
  let component: BigLoaderComponent;
  let fixture: ComponentFixture<BigLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
