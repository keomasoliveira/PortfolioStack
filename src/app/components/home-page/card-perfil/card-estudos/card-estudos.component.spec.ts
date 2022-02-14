/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardEstudosComponent } from './card-estudos.component';

describe('CardEstudosComponent', () => {
  let component: CardEstudosComponent;
  let fixture: ComponentFixture<CardEstudosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardEstudosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEstudosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
