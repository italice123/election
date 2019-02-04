import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckelectComponent } from './checkelect.component';

describe('CheckelectComponent', () => {
  let component: CheckelectComponent;
  let fixture: ComponentFixture<CheckelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
