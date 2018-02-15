import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Routei18nComponent } from './route-i18n.component';

describe('Routei18nComponent', () => {
  let component: Routei18nComponent;
  let fixture: ComponentFixture<Routei18nComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Routei18nComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Routei18nComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
