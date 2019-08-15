import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HidetaskPage } from './hidetask.page';

describe('HidetaskPage', () => {
  let component: HidetaskPage;
  let fixture: ComponentFixture<HidetaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HidetaskPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HidetaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
