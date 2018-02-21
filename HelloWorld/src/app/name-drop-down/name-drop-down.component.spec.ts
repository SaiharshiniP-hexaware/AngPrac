import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameDropDownComponent } from './name-drop-down.component';

describe('NameDropDownComponent', () => {
  let component: NameDropDownComponent;
  let fixture: ComponentFixture<NameDropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameDropDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
