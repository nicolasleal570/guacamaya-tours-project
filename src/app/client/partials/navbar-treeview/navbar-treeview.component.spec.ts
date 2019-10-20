import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarTreeviewComponent } from './navbar-treeview.component';

describe('NavbarTreeviewComponent', () => {
  let component: NavbarTreeviewComponent;
  let fixture: ComponentFixture<NavbarTreeviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarTreeviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarTreeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
