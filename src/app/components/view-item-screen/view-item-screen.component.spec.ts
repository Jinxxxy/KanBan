import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewItemScreenComponent } from './view-item-screen.component';

describe('ViewItemScreenComponent', () => {
  let component: ViewItemScreenComponent;
  let fixture: ComponentFixture<ViewItemScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewItemScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewItemScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
