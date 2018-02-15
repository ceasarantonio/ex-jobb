import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertSandboxComponent } from './alert-sandbox.component';

describe('AlertSandboxComponent', () => {
  let component: AlertSandboxComponent;
  let fixture: ComponentFixture<AlertSandboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertSandboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertSandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
