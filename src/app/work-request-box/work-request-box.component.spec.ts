import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkRequestBoxComponent } from './work-request-box.component';

describe('WorkRequestBoxComponent', () => {
  let component: WorkRequestBoxComponent;
  let fixture: ComponentFixture<WorkRequestBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkRequestBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkRequestBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
