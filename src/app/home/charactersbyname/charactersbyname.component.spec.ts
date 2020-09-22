import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersbynameComponent } from './charactersbyname.component';

describe('CharactersbynameComponent', () => {
  let component: CharactersbynameComponent;
  let fixture: ComponentFixture<CharactersbynameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharactersbynameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersbynameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
