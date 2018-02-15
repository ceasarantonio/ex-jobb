import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteNotificationComponent } from './route-notification.component';

describe('RouteNotificationComponent', () => {
  let component: RouteNotificationComponent;
  let fixture: ComponentFixture<RouteNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
