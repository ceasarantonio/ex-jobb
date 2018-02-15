import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteStudentsComponent } from './route-students.component';

describe('RouteStudentsComponent', () => {
  let component: RouteStudentsComponent;
  let fixture: ComponentFixture<RouteStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
