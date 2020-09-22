import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathcountComponent } from './deathcount.component';

describe('DeathcountComponent', () => {
  let component: DeathcountComponent;
  let fixture: ComponentFixture<DeathcountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeathcountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
