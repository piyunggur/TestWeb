import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesAppComponent } from './heroes-app.component';

describe('HeroesAppComponent', () => {
  let component: HeroesAppComponent;
  let fixture: ComponentFixture<HeroesAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
