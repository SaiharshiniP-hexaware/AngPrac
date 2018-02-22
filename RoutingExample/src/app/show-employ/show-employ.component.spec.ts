import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEmployComponent } from './show-employ.component';

describe('ShowEmployComponent', () => {
  let component: ShowEmployComponent;
  let fixture: ComponentFixture<ShowEmployComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowEmployComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEmployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
