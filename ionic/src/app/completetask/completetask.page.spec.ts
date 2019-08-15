import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletetaskPage } from './completetask.page';

describe('CompletetaskPage', () => {
  let component: CompletetaskPage;
  let fixture: ComponentFixture<CompletetaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletetaskPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletetaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
