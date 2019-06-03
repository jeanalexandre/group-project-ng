import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationsFormComponent } from './stations-form.component';

describe('StationsFormComponent', () => {
  let component: StationsFormComponent;
  let fixture: ComponentFixture<StationsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
