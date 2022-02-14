/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardPerfilProfilleComponent } from './card-perfil-profille.component';

describe('CardPerfilProfilleComponent', () => {
  let component: CardPerfilProfilleComponent;
  let fixture: ComponentFixture<CardPerfilProfilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPerfilProfilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPerfilProfilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
