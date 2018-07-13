import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreCheckListComponent } from './pre-check-list.component';

describe('PreCheckListComponent', () => {
  let component: PreCheckListComponent;
  let fixture: ComponentFixture<PreCheckListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreCheckListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreCheckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
