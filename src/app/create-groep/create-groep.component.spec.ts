import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGroepComponent } from './create-groep.component';

describe('CreateGroupComponent', () => {
  let component: CreateGroepComponent;
  let fixture: ComponentFixture<CreateGroepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGroepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGroepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
