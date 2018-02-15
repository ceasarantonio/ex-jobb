import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationSandboxComponent } from './notification-sandbox.component';

describe('NotificationSandboxComponent', () => {
  let component: NotificationSandboxComponent;
  let fixture: ComponentFixture<NotificationSandboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationSandboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationSandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
