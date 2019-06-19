import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroepenComponent } from './groepen.component';

describe('GroepenComponent', () => {
  let component: GroepenComponent;
  let fixture: ComponentFixture<GroepenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroepenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroepenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
