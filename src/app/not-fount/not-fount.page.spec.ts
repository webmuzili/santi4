import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFountPage } from './not-fount.page';

describe('NotFountPage', () => {
  let component: NotFountPage;
  let fixture: ComponentFixture<NotFountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFountPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
