import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjustPostComponent } from './adjust-post.component';

describe('AdjustPostComponent', () => {
  let component: AdjustPostComponent;
  let fixture: ComponentFixture<AdjustPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdjustPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjustPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
