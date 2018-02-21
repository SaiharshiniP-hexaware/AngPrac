import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownExampleComponent } from './drop-down-example.component';

describe('DropDownExampleComponent', () => {
  let component: DropDownExampleComponent;
  let fixture: ComponentFixture<DropDownExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropDownExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
