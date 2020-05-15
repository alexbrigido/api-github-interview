import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRepositorioComponent } from './dialog-repositorio.component';

describe('DialogRepositorioComponent', () => {
  let component: DialogRepositorioComponent;
  let fixture: ComponentFixture<DialogRepositorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogRepositorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRepositorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
