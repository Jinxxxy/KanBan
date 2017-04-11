import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewScreenComponent } from './add-new-screen.component';

describe('AddNewScreenComponent', () => {
  let component: AddNewScreenComponent;
  let fixture: ComponentFixture<AddNewScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
