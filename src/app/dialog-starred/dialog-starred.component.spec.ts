import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogStarredComponent } from './dialog-starred.component';

describe('DialogStarredComponent', () => {
  let component: DialogStarredComponent;
  let fixture: ComponentFixture<DialogStarredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogStarredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogStarredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
