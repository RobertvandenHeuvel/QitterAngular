import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReactieComponent } from './create-reactie.component';

describe('CreateReactieComponent', () => {
  let component: CreateReactieComponent;
  let fixture: ComponentFixture<CreateReactieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateReactieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReactieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
