import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteAlertComponent } from './route-alert.component';

describe('RouteAlertComponent', () => {
  let component: RouteAlertComponent;
  let fixture: ComponentFixture<RouteAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
