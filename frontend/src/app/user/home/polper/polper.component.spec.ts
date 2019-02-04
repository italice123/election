import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolperComponent } from './polper.component';

describe('PolperComponent', () => {
  let component: PolperComponent;
  let fixture: ComponentFixture<PolperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
